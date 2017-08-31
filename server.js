const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
//---------------------------SERVER SETUP------------------------\\

const PORT = 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname))

app.listen(PORT, function() {
    console.log('running on port 3000 home diggity')
  });