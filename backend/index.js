const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const fs = require('fs');
var cors = require('cors');
const app = express();

const { check, validationResult } = require('express-validator');

const { settings } = require('./settings');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200);
});

app.post('/create', [
    check('employee').isEmail(),
    check('customer').isLength({min: 3}),
    check('description').isLength({min: 15}),
  ], (req, res) => {
  const employee = req.body.email
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send('Invalid Data!')
  }
  else {
    res.status(200).json(req.body);
    fs.writeFile(settings.localPath,JSON.stringify(req.body,null,2), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));