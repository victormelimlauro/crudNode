var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clientes', { title: 'Clientes', escola: 'Senac', curso: 'Técnico Informática' });
});

module.exports = router;
