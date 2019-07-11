const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200);
});

app.post('/create', (req, res) => {
  res.status(200).json(req.body);
  
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));