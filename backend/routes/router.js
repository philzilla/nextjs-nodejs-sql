const express = require('express')
,     router = express.Router()
,     indexController = require('../controllers/index.controller');


router.get('/', indexController.getIndexPage);
router.post('/ajoutthe', indexController.postAjoutPage);

// 404
router.get('*', function(req, res, next){
  res.status(404);
  res.json({message: 'Page introuvable'});
});
module.exports = router;