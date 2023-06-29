const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const bookController = require("../controllers/books-controller");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.get("/:id", bookController.getById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
