import Navbar from "../components/navbar/Navbar";
import AddBook from "../pages/add-books/Addbook";
import EditBook from "../pages/edit-book/EditBook";
import Home from "../pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/editbook" element={<EditBook />} />
      </Routes>
      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default App;
