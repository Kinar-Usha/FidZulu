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

exports.foodByLocation = (loc) =>{
    if(loc !== "IN" && loc!=="IE" && loc!="US-NC"){
        return null;
    }
    let results = JSON.parse(read_json_file());
    console.log("Location => "+loc);
    for(let i =0; i < results.length; i++){
        switch(loc){
            case "IN":
                results[i].price*=1.18;
                results[i].price=parseFloat(results[i].price.toFixed(2));
                break;
            case "US-NC":
                results[i].price*=0.012;
                results[i].price*=1.08;
                results[i].price=parseFloat(results[i].price.toFixed(2));
                break;
            case "IE":
                results[i].price*=0.011;
                results[i].price*=1.23;
                results[i].price=parseFloat(results[i].price.toFixed(2));
                break;
        }
        
    }
    return results;
}

exports.foodServiceTeam=()=>{
    const team={
        "name":"Food Service team",
        "members":{
            "member1":"Jitin",
            "member2":"krishna"
        }
    }
    return team;
}