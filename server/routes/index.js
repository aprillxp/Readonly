import express from "express";
const router = express.Router();
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/index.js";

router.post("/books", createBook); // create entity
router.get("/books", getBooks); // get all entity
router.get("/books/:id", getBookById); // get one entity
router.put("/books/:id", updateBook); // udpate entity
router.delete("/books/:id", deleteBook); // delete entity

export default router;
