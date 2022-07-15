var express = require('express');
var controller = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.post('/create', function(req, res) {
  controller.create(req, res);
});

router.get('/', function (req, res) {
  controller.findAll(req, res);
});

module.exports = router;
