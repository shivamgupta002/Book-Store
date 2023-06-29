import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import AddBook from "./Component/AddBook";
import Book from "./Component/Book/Books";
import Contact from "./Component/Contact";
import BookDetail from "./Component/Book/BookDetail";


function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Book />} exact />
          <Route path="/about" element={<Contact />} exact />
          <Route path="/books/:id" element={<BookDetail/>} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
