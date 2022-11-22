const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const data = req.db.get('snails');

  console.log(data);
  setTimeout(() => {
    res.json({ data: [...data]})
  }, 2000);
});

router.get('/:id', (req, res) => {
  const data = req.db.get('snails');
  const item = data.find(element => element.id.toString() === req.params.id);
  res.json({ data: item })
});

router.get('/search/:name', (req, res) => {
  const data = req.db.get('snails');
  const filtered = data.filter(t => t.name.toLowerCase().includes(req.params.name.toLowerCase()));
  res.json({ data: [ ...filtered ] })
});

router.post('/', (req, res) => {
  const data = req.db.get('snails');
  const id = Math.floor(Math.random() * 10000);

  const updatedData = [ 
    ...data, 
    { 
      id,
      name: req.body.name,
      alias: req.body.alias,
      speed: parseInt(req.body.speed, 10),
      number: parseInt(req.body.number, 10),
      purchaseDate: req.body.purchaseDate,
    }
  ]

  req.db.set('snails', updatedData);

  res.json({ data: updatedData})
});

module.exports = router;
