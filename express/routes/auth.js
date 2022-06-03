const express = require('express');

const router = express.Router();

router.get('/v1/login', (req, res) => {
  res.json({status: 'success'});
});

router.post('/v1/forgot-password', (req, res) => {
  res.json({code: '123'});
});

router.route('/user/:id')
  .get((req, res) => {
    //get
    res.json({_id: req.params.id})
  })
  .put((req, res) => {
    //update
    res.json({_id: req.params.id})
  })
  .post((req, res) => {
    //create
    res.json({_id: req.params.id})
  })
  .delete((req, res) => {
    //delete
    res.json({_id: req.params.id})
  });

router.param

module.exports = router;
