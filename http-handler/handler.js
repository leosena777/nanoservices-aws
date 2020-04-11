"use strict";
const S3Service = require("./services/s3Services");
const DynamoDBService = require("./services/dynamoDBService");

module.exports.upload = async (event) => {
  const item = await S3Service.upload(event.body);
  await DynamoDBService.put(item);

  return {
    statusCode: 201,
    body: JSON.stringify(item),
  };
};
