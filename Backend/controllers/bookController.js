const BookModel = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addBook = async (req, res) => {
    try {
        const { title, author, genre, publication_date, description } = req.body;
        const book = await BookModel.addBook(title, author, genre, publication_date, description);
        res.status(201).json({ success: true, book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, genre, publication_date, description } = req.body;
        const book = await BookModel.updateBook(id, title, author, genre, publication_date, description);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const softDeleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookModel.softDeleteBook(id);
        res.json({ message: "Book soft deleted", book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllBooks, addBook, updateBook, softDeleteBook };
