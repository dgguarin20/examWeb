const express = require('express');
const router = express.Router();
const mongoclient = require('mongodb').MongoClient;
const assert = require('assert');

//se conecta al mongoclient ---> mas le vale 
mongoclient.connect('mongodb://localhost/examen', function(erro, client)
{
  assert.equal(null, erro);
  console.log("se conecto");
  const db = client.db("examenWeb");
  client.close()
});

//para ir al webpage

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;

  
