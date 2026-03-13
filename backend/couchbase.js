const couchbase = require("couchbase");

const cluster = new couchbase.Cluster(
process.env.COUCHBASE_CONNECTION_STRING,
{
username:process.env.COUCHBASE_USERNAME,
password:process.env.COUCHBASE_PASSWORD
}
);

const bucket = cluster.bucket(process.env.COUCHBASE_BUCKET);
const collection = bucket.defaultCollection();

module.exports = collection;