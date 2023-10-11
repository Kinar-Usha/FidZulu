
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const filepath=path.join(rootPath, 'resources/Toysjson.json');
const fs = require('fs');
const getAllDataFromDynamoDB = require('./daoImpl');



exports.query_by_arg = async(value) =>{
    if(value !== "Raleigh" && value!=="Durham"){
        return null;
    }

     try {
    // Use the asynchronous DAO function to get data from DynamoDB
    const data = await getAllDataFromDynamoDB();
    // Process the data based on the location value
    const results = data.map((item) => {
      const resultItem = { ...item };
      if (value === 'Raleigh') {
        resultItem.price *= 1.075;
      } else if (value === 'Durham') {
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

exports.post_toy = (toys) => {
    if (toys.hasOwnProperty("name") && toys.hasOwnProperty("brand") && toys.hasOwnProperty("age_group") &&
     toys.hasOwnProperty("price") && Object.keys(toys).length == 4) {
        let results = JSON.parse(read_json_file());
        results[results.length] = toys;
        const data = JSON.stringify(results);
        fs.writeFile("../Resources/Toysjson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
        return toys;
    }
    return null;
}

exports.reset_json = (content) => {
    const data = JSON.stringify(content);
        fs.writeFile("../Resources/Toysjson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
}