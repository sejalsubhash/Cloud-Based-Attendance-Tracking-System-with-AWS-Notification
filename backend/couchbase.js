const couchbase = require("couchbase");

const cluster = new couchbase.Cluster(
process.env.COUCHBASE_CONN,
{
username:process.env.COUCHBASE_USER,
password:process.env.COUCHBASE_PASS
}
);

const bucket = cluster.bucket(process.env.COUCHBASE_BUCKET);
const collection = bucket.defaultCollection();

module.exports = collection;