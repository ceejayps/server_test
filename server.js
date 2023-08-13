const express = require("express");
const dotEnv = require("dotenv").config({ path: 'server.env' });
const morgan = require("morgan");
const path = require('path');

// initialize http server
const server = express();

//set port number
const PORT = process.env.PORT || 1876;

//log request to server in console
server.use(morgan("tiny"));

//parse request with body parser
server.use(express.json());
// Use helmet middleware to set security-related headers
server.use(express.static('public'));



server.get("/",
 async (req, res) => {
  const userAgent = req.headers['user-agent'];
  console.log([userAgent])
  console.log({headers:req.headers})
  console.log({request:req})
   return res.send("reach");
})





//server event listener
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});