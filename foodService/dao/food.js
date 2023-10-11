const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const filepath=path.join(rootPath, 'resources/Foodjson.json');
const fs = require('fs');
let read_json_file = () =>{
    
    return fs.readFileSync(filepath);
}

exports.list = () =>{
    return JSON.parse(read_json_file());
}

exports.query_by_arg = (value) =>{
    if(value !== "India" && value!=="Usa"){
        return null;
    }
    let results = JSON.parse(read_json_file());
    console.log("Query by location" + value);
    for(let i =0; i < results.length; i++){
        if(value === "India"){
            results[i].price *= 1.18;
        }else if(value === "Usa"){
            
            results[i].price *= 1.23;
        }
    }
    return results;
}