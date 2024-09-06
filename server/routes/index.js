import express from "express";
const router = express.Router();
import { saveBook } from "../controllers/book.js";

router.post("/save-book", (req, res) => {
  // Handler untuk menyimpan buku
  saveBook(req.body); // Memanggil fungsi saveBook dari controller book.js
  res.send("Book saved successfully");
});

export default router;
