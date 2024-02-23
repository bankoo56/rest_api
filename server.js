// server.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Pongsagon Koonsena 6404101365')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})