import './main.css' 
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Section from "./components/Section/Section";
import SquareCollection from "./components/SquareCollection/SquareCollection";
const App = () => {
  return (
    <>
    <Header />
    <SquareCollection />
    <Footer />
    </>
  );
};

export default App;
