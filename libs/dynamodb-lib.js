import AWS from "aws-sdk";

// Here we are using the promise form of the DynamoDB methods.

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
