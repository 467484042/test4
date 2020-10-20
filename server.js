'use strict';
  
const request = require("request");
const express = require('express');
const os =require('os');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();

app.get('/', (req, res)=> {

  return res.send ("hello from node !"+ os.hostname());
});

app.listen(PORT);
console.log(`Running on port :${PORT}`);
