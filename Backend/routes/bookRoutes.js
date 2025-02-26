const express = require('express');
const router = express.Router();
const { getAllBooks, addBook, updateBook, softDeleteBook } = require('../controllers/bookController');

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', softDeleteBook);

module.exports = router;
