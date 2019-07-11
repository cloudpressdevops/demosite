const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname,'public/create.html'))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));