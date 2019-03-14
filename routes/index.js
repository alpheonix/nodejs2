var express = require('express');
var router = express.Router();
const request = require('request');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'node App' });
});

router.post('/ville', async  function (req, response) {
  console.log(req.body.nom_ville);

  const test = await request(`https://geocode.xyz/${req.body.nom_ville}?json=1&auth=387209274444184739495x1963`, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.longt);
    console.log(body.latt);

    response.render("ville", { ville: req.body.nom_ville, desc: req.body.desc, longt: body.longt, latt: body.latt });
  });


  

});


module.exports = router;
