const Book = require("../model/Book");

//Get Book
const getAllBooks = async (req, res, next) => {
  // This route will provide all of the books
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ books });
};

//Search  Book
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book Found" });
  }
  return res.status(200).json({ book });
};

// Add Book
const addBook = async (req, res, next) => {
  const { name, author, description, price, available ,image} = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ book });
};

//Update Book
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available,image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to Update by ID" });
  }
  return res.status(201).json({ book });
};

//Delete Book
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Delete by ID" });
  }
  return res.status(201).json({ message: "Product Successfully Deleted" });
};

//Exports
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
