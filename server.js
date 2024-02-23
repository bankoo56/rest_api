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

// Insert into books (id,name) values ("3","Crazy horse")
app.post('/books', (req, res) => {
  books.push(req.body)
  res.status(201).json(req.body)
})