var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Senac Campinas', curso: 'TI', uc:'12' });
});

module.exports = router;
