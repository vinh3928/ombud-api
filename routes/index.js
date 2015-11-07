require('dotenv').load();
var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/commits/:name/:user', function(req, res, next) {
  axios({
    method: "get",
    url: "https://api.github.com/repos/" + req.params.user + "/" + req.params.name + "/commits?client_id=" + process.env.CLIENT_ID + "&client_secret=" + process.env.CLIENT_SECRET
  })
  .then(function(data) {
    res.status(200).json(data);
  });
});

module.exports = router;
