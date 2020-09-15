const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/api/tickets', async (req, res) => {
    res.send("hello world")
})
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)