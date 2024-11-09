import React from "react";
import Header from "./components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import {Routes, Route } from 'react-router-dom';
import ProductViewPage from "./pages/ProductViewPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    
      {/* Header fixo no topo */}
      <Header />
      {/* Área principal onde as rotas são renderizadas */}
      <main>
        <Routes>
           {/* Rota para a página inicial */}
           <Route path="/" element={<HomePage />} />
          {/* Rota para a página de visualização do produto */}
          <Route path="/product/:id" element={<ProductViewPage />} />
        </Routes>
      </main>

      {/* Footer fixo no final */}
      <Footer />

     </>
    
  );
}

export default App;
