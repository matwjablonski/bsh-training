const express = require("express");
const app = express();
const cors = require('cors');

const JSONdb = require('simple-json-db');
const db = new JSONdb('./db.json');

const SongsRouter = require("./controllers/songs");

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
        '/api/songs': ['GET', 'POST'],
        '/api/songs/:id': ['GET'],
        '/api/songs/search/:title': ['GET'],
      }
    })
  });

app.use('/api/songs', SongsRouter);

app.listen(8000, () => {
 console.log("Server running on port 8000");
});
