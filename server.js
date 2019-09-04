const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static( './lib/' ) ); // needs to be directed to html file



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });