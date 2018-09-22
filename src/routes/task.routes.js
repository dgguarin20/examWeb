const express = require('express');
const router = express.Router();

const mongoclient = require('mongodb').MongoClient;
const assert = require('assert');


router.post('/info', (req,res,next) =>{
  
  mongoclient.connect('mongodb://localhost/examen', function(erro, client)
  {
    assert.equal(null, err);
    console.log("se conecto");
    const db = client.db("examenWeb");
    client.close()
  })
  // Use connect method to connect to the server
}
)
module.exports = router;

// Task Model
/**
const Task = require('../models/task');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { startDate, HoraLlegada, HoraSalida, idMasajista } = req.body;
  const task = new Task({startDate, HoraLlegada, HoraSalida, idMasajista });
  await task.save();
  res.json({status: 'Task Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { startDate, HoraLlegada, HoraSalida, idMasajista } = req.body;
  const newTask = {startDate, HoraLlegada, HoraSalida, idMasajista };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});
*/
module.exports = router;
