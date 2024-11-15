import React, { useState, useEffect } from 'react';
import Camiseta from "../../assets/icons/camiseta.png";
import Calca from "../../assets/icons/calca.png";
import Headphones from "../../assets/icons/headphones.png";
import Tenis from "../../assets/icons/tenis.png";
import Calca_Primary from "../../assets/icons/Calca_Primary.png";
import Fone_Primary from "../../assets/icons/Camisa_Primary.png";
import Tenis_Primary from "../../assets/icons/Tenis_Primary.png";
import Camisa_Primary from "../../assets/icons/Fone_Primary.png";
import Section from '../Section/Section';
import "./Circle.css";

export default function CircleCollection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSelect = (category) => {
        setActiveIndex(category);
    };

    useEffect(() => {
        setActiveIndex(categories[0].name);
    }, []);

    const categories = [
        { name: 'Camiseta', img: Camiseta, primary: Camisa_Primary },
        { name: 'Calça', img: Calca, primary: Calca_Primary },
        { name: 'Bonés', img: Calca, primary: Calca_Primary },
        { name: 'Headphones', img: Headphones, primary: Fone_Primary },
        { name: 'Tênis', img: Tenis, primary: Tenis_Primary },
    ];

    return (
        <Section title='Coleções em Destaque' titleAlign='center' classe="circleCollection"> 
            <div className="buttons">
                {categories.map((category) => (
                    <div className="roupas" key={category.name}>
                        <button onClick={() => handleSelect(category.name)}>
                            <img
                                src={activeIndex === category.name ? category.primary : category.img}
                                alt={category.name}
                            />
                        </button>
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </Section >
    );
}