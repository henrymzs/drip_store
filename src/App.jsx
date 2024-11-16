import './main.css' 
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SquareCollection from "./components/SquareCollection/SquareCollection";
import CircleCollection from './components/CircleCollection/CircleCollection';
import SpecialOffer from "./components/SpecialOffer/Special_Offer";
import Section from "./components/Section/Section";
import ProductListing from "./components/ProductListing/ProductListing";
import ProductCard from "./components/ProductCard/ProductCard";
const App = () => {
  return (
    <>
    <Header />
    <SquareCollection />
    <SpecialOffer/>
    <CircleCollection />
    <ProductListing/>
    <Footer />
    </>
  );
};

export default App;
