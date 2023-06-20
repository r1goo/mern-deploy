const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());

const PORT = process.env.API_PORT;

app.get('/api/test', (req,res) => {
  res.json('Hello world ' + Date.now());
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

module.exports = app;