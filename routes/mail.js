const express = require('express');
const sendMail = require("../helpers/mailer");

const router = express.Router();

router.post('/v1/send',  (req, res) => {
  const mailResponse =  sendMail(
    'kashanshah@hotmail.com',
    'webmailer@kashanshah.com',
    'New Message Received on kashanshah.com',
    '' +
    '<h3>A new message has been rceieved on kashanshah.co</h3>' +
    '<p>Following are the details:</p>' +
    '<p><strong>Name: </strong>' + req.body.name + '</p>' +
    '<p><strong>Email: </strong>' + req.body.contact + '</p>' +
    '<p><strong>Email: </strong>' + req.body.message + '</p>'
  ).then(response => {
    res.json({status: 200, body: response});
  }).catch(error=>{
    // console.log(error)
    res.status(500).json({error: error});
  });

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
