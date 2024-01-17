import Navbar from "../components/navbar/Navbar";
import AddBook from "../pages/add-books/Addbook";
import Home from "../pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
