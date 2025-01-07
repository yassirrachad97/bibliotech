import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About'; 
import BookList from './components/BookList/BookList'; 
import BookDetails from './components/BookDetails/BookDetails'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route principale */}
        <Route path="/" element={<Home />}>
          {/* Enfants de Home */}
          <Route index element={<BookList />} /> {/* Route par défaut */}
          <Route path="book/:id" element={<BookDetails />} /> {/* Détails du livre */}
        </Route>
        {/* Route pour About */}
        <Route path="about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
