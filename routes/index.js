var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'node App' });
});

router.post('/ville',function(req, res) {
  var desc = req.body.desc.replace(/(?:\r\n|\r|\n)/g, '<br>');
  res.render("ville",{ ville: req.body.nom_ville,desc: desc});
});

module.exports = router;
