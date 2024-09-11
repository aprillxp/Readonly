import express from "express";
const router = express.Router();
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/index.js";

router.post("/book", createBook); // create entity
router.get("/books", getBooks); // get all entity
router.get("/book/:id", getBookById); // get one entity
router.put("/book/:id", updateBook); // udpate entity
router.delete("/book/:id", deleteBook); // delete entity

export default router;
