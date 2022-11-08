const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const data = req.db.get('songs');

  console.log(data);
  setTimeout(() => {
    res.json({ data: [...data]})
  }, 2000);
});

router.get('/:id', (req, res) => {
  const data = req.db.get('songs');
  const item = data.find(element => element.id.toString() === req.params.id);
  res.json({ data: item })
});

router.get('/search/:title', (req, res) => {
  const data = req.db.get('songs');
  const filtered = data.filter(t => t.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json({ data: [ ...filtered ] })
});

router.post('/', (req, res) => {
  const data = req.db.get('songs');
  const id = Math.floor(Math.random() * 10000);

  const updatedData = [ 
    ...data, 
    { 
      id,
      title: req.body.title,
      transactionType: req.body.transactionType,
      date: req.body.date,
      currency: req.body.currency,
      value: parseInt(req.body.value, 10),
    }
  ]

  req.db.set('songs', updatedData);

  res.json({ data: updatedData})
});

module.exports = router;
