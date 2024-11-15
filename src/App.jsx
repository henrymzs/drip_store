import './main.css' 
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SquareCollection from "./components/SquareCollection/SquareCollection";
import CircleCollection from './components/CircleCollection/CircleCollection';
const App = () => {
  return (
    <>
    <Header />
    <SquareCollection />
    <CircleCollection />
    <Footer />
    </>
  );
};

export default App;
