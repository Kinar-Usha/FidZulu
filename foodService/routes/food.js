var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const food = require("../dao/food");


router.get('/all/:location', async function(req, res, next) {
    const param = req.params.location;
    console.log('got into food/:location ' + param);
  
    const result = await food.foodByLocation(
      param);
    if (result) {
      res.setHeader('content-type', 'application/json');
      res.json((result));
    } else {
      next(createError(404));
    }
});


router.get('/team',function(req,res,next){
  console.log("in team request");
  const result=food.foodServiceTeam();
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.json((result));
  } else {
    next(createError(404));
  }
})


module.exports = router;