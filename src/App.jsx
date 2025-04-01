import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  MyNav,
  Welcome,
  Categories,
  TheAllBooks,
  Testimonials,
  Newsletter,
  MyFooter,
  About,
  NotFound,
  BookDetails,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("horror");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeProvider>
      <Router>
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <>
              <Welcome />
              <Categories
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />      
              <TheAllBooks selectedCategory={selectedCategory} searchQuery={searchQuery} />
              <Testimonials />
              <Newsletter />
            </>
          } />
          <Route path="/book/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </Router>
    </ThemeProvider>
  );
}

export default App;