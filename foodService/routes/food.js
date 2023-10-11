var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const food = require("../dao/food");
//const team = require("../dao/toysTeam");

// router.get('/team', function(req, res, next) {
//   console.log('got into /team');

//   const result = team.list();
//   if (result) {
//     res.setHeader('content-type', 'application/json');
//     res.json((result));
//   } else {
//     next(createError(404));
//   }
// });

router.get('/:location', function(req, res, next) {
    const param = req.params.location;
    console.log('got into food/:location ' + param);
  
    const result = food.query_by_arg(
      param);
    if (result) {
      res.setHeader('content-type', 'application/json');
      res.json((result));
    } else {
      next(createError(404));
    }
});


module.exports = router;