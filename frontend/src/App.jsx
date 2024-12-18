import React from "react";
import Navbar from "./components/layaout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Bienvenue à la Bibliothèque</h1>
        <p className="text-lg text-gray-700">
          Explorez notre collection de livres et découvrez un monde de connaissances.
        </p>
      </div>
    </div>
  );
}

export default App;
