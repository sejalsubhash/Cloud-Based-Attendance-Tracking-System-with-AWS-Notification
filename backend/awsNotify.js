const AWS = require("aws-sdk");

const sns = new AWS.SNS({
region:process.env.AWS_REGION
});

async function sendNotification(message){

await sns.publish({
TopicArn:process.env.SNS_TOPIC,
Message:message
}).promise();

}

module.exports = sendNotification;