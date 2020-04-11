'use strict';
const S3Service = require('./services/s3Services');

module.exports.upload = async (event) => {
  const result = await S3Service.upload(event.body);
  return {
    statusCode: 201,
    body: JSON.stringify(result),
  };
};