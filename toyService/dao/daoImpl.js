const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const path= require('path');    
const fs= require('fs');
const rootPath= path.resolve(__dirname, '../');
dotenv.config({ path: path.resolve(rootPath, './.env') })
const jsonRootPath= path.resolve(__dirname, '../../');
const filepath=path.join(jsonRootPath, 'resources/Toysjson.json');

var circuitBreakerFlag=false
if (process.env.AWS_REGION && process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
var docClient;
    
// Configure your AWS credentials
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
   docClient = new AWS.DynamoDB.DocumentClient();

}else{
    circuitBreakerFlag=true;
    // Create a DynamoDB Document Client
// DynamoDB table name
}

const tableName = 'fz_toys';







// Call the function to retrieve all items from the DynamoDB table
function getAllDataFromDynamoDB(callback) {
   
    const params = {
        TableName: tableName || 'fz_toys',
    };

    return new Promise((resolve, reject) => {
        if(circuitBreakerFlag){
            resolve ( JSON.parse(fs.readFileSync(filepath)));
    
        }
        docClient.scan(params, (err, data) => {
          if (err) {
            console.error('Error:', err);
            reject(err);
          } else {
            if (data.Items) {
              resolve(data.Items);
            } else {
              console.log('No items found in the table.');
              resolve([]);
            }
          }
        });
      });
    
}

module.exports = getAllDataFromDynamoDB;
