const express = require('express');
const path = require('path');
const { checkSchema, validationResult } = require('express-validator');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
  next();
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post(
  '/', 
  checkSchema({
    name: {
      isLength: { 
        errorMessage: 'too short',
        options: { min: 10 }
      },
    }
  }),
  (req, res) => {
    console.log(req.body);

    const results = validationResult(req);
    console.log(results);
    res.send('Success!')
  }
);

app.use('/', (req, res) => {
  console.log(`Requested endpoint is ${req.originalUrl}` );
});

app.listen(5001, () => {
  console.log('Server is working!')
})
