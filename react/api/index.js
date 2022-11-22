const express = require("express");
const app = express();
const cors = require('cors');

const JSONdb = require('simple-json-db');
const db = new JSONdb('./db.json');

const SnailsRouter = require("./controllers/snails");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.get('/api', (req, res) => {
    res.json({
      availableRoutes: {
        '/api': ['GET'],
        '/api/snails': ['GET', 'POST'],
        '/api/snails/:id': ['GET'],
        '/api/snails/search/:name': ['GET'],
      }
    })
  });

app.use('/api/snails', SnailsRouter);

app.listen(8000, () => {
 console.log("Server running on port 8000");
});
