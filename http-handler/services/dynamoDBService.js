const AWS = require("aws-sdk");
const uuid = require("uuid/v4");

AWS.config.update({
  region: "us-east-2",
});

const table = "imagens";
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const put = (item) => {
  return new Promise((resolve, reject) => {
    dynamoDB.put(
      {
        TableName: table,
        Item: {
          id: item.key,
          bucket: item.bucket,
        },
      },
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      }
    );
  });
};

module.exports = { put };
