var express = require('express');

var router = express.Router();
var createError = require('http-errors');
const toys = require("../dao/toys");
const team = require("../dao/toysTeam");

router.get('/team', function(req, res, next) {
  console.log('got into /team');

  const result = team.list();
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.json((result));
  } else {
    next(createError(404));
  }
});

router.get('/:location', async function(req, res, next) {
  const param = req.params.location;
  console.log('got into toys/:location ' + param);

  const result = await toys.query_by_arg(
    param);
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.json((result));
  } else {
    next(createError(404));
  }
});


module.exports = router;