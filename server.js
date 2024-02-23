// server.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Pongsagon Koonsena 6404101365')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

// Select * from books
const books = require('./db')
app.get('/books', (req, res) => {
  res.json(books)
})

// Select * from books where id = 1?
app.get('/books/:id', (req, res) => {
  res.json(books.find(book => book.id === req.params.id))
})

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Insert into books (id,name) values ("3","Crazy horse")
app.post('/books', (req, res) => {
  books.push(req.body)
  res.status(201).json(req.body)
})

// Update books (name) values ("LISA") where id = 2
app.put('/books/:id', (req, res) => {
  const updateIndex = books.findIndex(book => book.id === req.params.id)
  res.json(Object.assign(books[updateIndex], req.body))
})