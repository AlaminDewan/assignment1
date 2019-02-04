var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new_page', { title: 'New page' });
});

module.exports = router;