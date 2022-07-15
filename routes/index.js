var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reverse', function(req, res, next) {
  let value = controller.reverseWord(req.body.myData);
  res.send(value);
});

module.exports = router;
