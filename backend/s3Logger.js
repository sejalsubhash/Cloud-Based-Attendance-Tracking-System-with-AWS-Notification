const AWS = require("aws-sdk");

const s3 = new AWS.S3();

async function logToS3(data){

const date = new Date().toISOString().split("T")[0];

await s3.putObject({

Bucket:process.env.S3_BUCKET,
Key:`${date}/${Date.now()}.json`,
Body:JSON.stringify(data)

}).promise();

}

module.exports = logToS3;