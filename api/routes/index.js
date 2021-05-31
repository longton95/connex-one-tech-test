const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/testmsg', (req, res, next) => {
  res.json({ message: "testData" });
});

module.exports = router;
