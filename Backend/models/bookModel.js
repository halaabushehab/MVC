const pool = require('../config/db');

class BookModel {
    static async getAllBooks() {
        const result = await pool.query('SELECT * FROM books WHERE is_deleted = false');
        return result.rows;
    }

    static async addBook(title, author, genre, publication_date, description) {
        const result = await pool.query(
            "INSERT INTO books (title, author, genre, publication_date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [title, author, genre, publication_date, description]
        );
        return result.rows[0];
    }

    static async updateBook(id, title, author, genre, publication_date, description) {
        const result = await pool.query(
            'UPDATE books SET title=$1, author=$2, genre=$3, publication_date=$4, description=$5 WHERE id=$6 RETURNING *',
            [title, author, genre, publication_date, description, id]
        );
        return result.rows[0];
    }

    static async softDeleteBook(id) {
        const result = await pool.query(
            "UPDATE books SET is_deleted = TRUE WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    }
}

module.exports = BookModel;
