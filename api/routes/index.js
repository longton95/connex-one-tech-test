var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/testmsg', function(req, res, next) {
  res.json({ message: "testData" });
});

module.exports = router;
