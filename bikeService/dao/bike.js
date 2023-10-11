
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const filepath=path.join(rootPath, 'resources/Bikesjson.json');
const fs = require('fs');
const getAllDataFromDynamoDB = require('./daoImpl');



exports.query_by_arg = async(value) =>{
    if(value !== "India" && value!=="Ireland"){
        return null;
    }

     try {
    // Use the asynchronous DAO function to get data from DynamoDB
    const data = await getAllDataFromDynamoDB();
    // Process the data based on the location value
    const results = data.map((item) => {
      const resultItem = { ...item };
      if (value === 'India') {
        resultItem.price *= 1.075;
      } else if (value === 'Ireland') {
        resultItem.price *= 1.08;
      }
      resultItem.price = parseFloat(resultItem.price.toFixed(2));
      return resultItem;
    });
    return results;
  } catch (error) {
    console.error('Error querying data from DynamoDB:', error);
    return null;
  }
}



exports.reset_json = (content) => {
    const data = JSON.stringify(content);
        fs.writeFile("../Resources/Bikejson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
}