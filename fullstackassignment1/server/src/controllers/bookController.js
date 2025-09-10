import Book from '../models/Book.js';

// GET /api/books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// GET /api/books/:id
export const getBookById = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);

        if(!book) return res.status(404).json({ message: "Book not found" });

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//POST /api/books
export const createBook = async (req, res) => {
    try{
        const { title, author, year, pages, description, coverUrl } = req.body;

        if(!title.trim() || !author.trim()) {
            return res.status(400).json({ message: "Title and Author are required" });
        }

        const book = new Book({
            title: title.trim(),
            author: author.trim(),
            year,
            pages,
            description: description.trim() ?? ' ',
            coverUrl: coverUrl.trim() ?? ' '
        });

        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   


// PUT /api/books/:id
export const updateBook = async (req, res) => {
    try{
        const { title, author, year, pages, description, coverUrl } = req.body;

        const update= {};
        if(title !== undefined) update.title = title.trim();
        if(author !== undefined) update.author = author.trim();
        if(year !== undefined) update.year = year;
        if(pages !== undefined) update.pages = pages;
        if(description !== undefined) update.description = description.trim();
        if(coverUrl !== undefined) update.coverUrl = coverUrl.trim();

        const book = await Book.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });

        if(!book) return res.status(404).json({ message: "Book not found" });

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Delete /api/books/:id

export const deleteBook = async (req, res) => {
    try{
        const deleted = await Book.findByIdAndDelete(req.params.id);

        if(!deleted) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}