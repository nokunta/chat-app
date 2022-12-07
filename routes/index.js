var express = require('express');
var router = express.Router();
var db = require('../dbconfig');

/* GET home page. */
router.get('/', async function(req, res) {
  await db.set('radis-key', 'redis-value');
  var mydata = await db.get('radis-key');
  res.render('index', { title: mydata });
});

module.exports = router;
