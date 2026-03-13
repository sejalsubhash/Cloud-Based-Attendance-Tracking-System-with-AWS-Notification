const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

const collection = require("../couchbase");
const notify = require("../awsNotify");
const logToS3 = require("../s3Logger");

const couchbase = require("couchbase");

/* Punch Action */

router.post("/punch", async (req, res) => {

  try {

    const { user, type, project, notes, time } = req.body;

    const record = {
      id: uuid(),
      user,
      type,
      project,
      notes,
      time: new Date(time)
    };

    await collection.insert(record.id, record);

    /* Send AWS Notification */

    await notify(`${user} performed ${type}`);

    /* Store log in S3 */

    await logToS3(record);

    res.json({ status: "saved" });

  } catch (err) {

    console.error(err);
    res.status(500).send("Error saving record");

  }

});


/* Get History */

router.get("/history", async (req, res) => {

  try {

    const cluster = collection.bucket.cluster;

    const bucketName = process.env.COUCHBASE_BUCKET;

    const query = `
      SELECT META().id, user, type, project, notes, time
      FROM \`${bucketName}\`
      ORDER BY time DESC
    `;

    const result = await cluster.query(query);

    res.json(result.rows);

  } catch (err) {

    console.error(err);
    res.status(500).send("Error fetching history");

  }

});

module.exports = router;