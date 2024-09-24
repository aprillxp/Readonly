import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Pastikan BrowserRouter diimpor
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBooks from "./pages/ShowBooks";
import UpdateBooks from "./pages/UpdateBooks";
import DeleteBooks from "./pages/DeleteBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Perbaikan di sini */}
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/update/:id" element={<UpdateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;
