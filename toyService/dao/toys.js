
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
const filepath = path.join(rootPath, 'resources/Toysjson.json');
const fs = require('fs');
const getAllDataFromDynamoDB = require('./daoImpl');



exports.getToys = async (loc) => {
  if (loc !== "IN" && loc !== "IE" && loc != "US-NC") {
    return null;
  }
  let results = await getAllDataFromDynamoDB();
  console.log("Location => " + loc);
  for (let i = 0; i < results.length; i++) {
    switch (loc) {
      case "IN":
        results[i].price *= 1.18;
        results[i].price = parseFloat(results[i].price.toFixed(2));
        break;
      case "US-NC":
        results[i].price *= 0.012;
        results[i].price *= 1.08;
        results[i].price = parseFloat(results[i].price.toFixed(2));
        break;
      case "IE":
        results[i].price *= 0.011;
        results[i].price *= 1.23;
        results[i].price = parseFloat(results[i].price.toFixed(2));
        break;
    }

  }
  return results;
}

exports.toyServiceTeam = () => {
  const team = {
    "name": "Toy Service team",
    "members": {
      "member1": "Kinar",
      "member2": "Vishakha",
      "member3": "Jitin",
      "member4": "krishna",
      "member5": "Saundarya",
      "member6": "Riddhi"
    }
  }
  return team;
}