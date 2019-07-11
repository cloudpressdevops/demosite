const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.json({'HelloWorld':"200"});
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));