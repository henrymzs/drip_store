import React, { useState } from "react";
import { Carousel } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

import SneakersGallery from '../../assets/images/Sneakers-Gallery.png'
import ArrowRight from '../../assets/carrosel/arrow-rightt.svg'
import ArrowLeft from '../../assets/carrosel/arrow-left.svg'

import CircleGallery from '../../assets/images/CircleGallery.png'

const images = [
    {src: SneakersGallery, alt: 'Imagem 1'},
    {src: SneakersGallery, alt: 'Imagem 2'},
    {src: SneakersGallery, alt: 'Imagem 3'},
    {src: SneakersGallery, alt: 'Imagem 4'}
    
];

images.map(imagens => {
    <>
    <img src={imagens.src} alt="" />
    </>
});

export default function Gallery() {
const [activeIndex, setActiveIndex] = useState(0); 

const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        nextIcon={<img src={ArrowRight} aria-hidden="true" className="custom-next-icon" />}
        prevIcon={<img src={ArrowLeft} aria-hidden="true" className="custom-prev-icon" />}
        >
            <Carousel.Item>
            <div className='galleryPrincipal'>
              <div className='galleryExtra'>
                <div className='galleryTexto'>
                 <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                 </p>
                 <h1>
                    Queima de estoque Nike 🔥
                 </h1>
                 <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi exceptur do do tempor laboris eiusmod irure consectetur.
                 </p>
                 <a href="#productMain">
                    <button>Ver Ofertas</button>
                 </a>
                </div>
                <div className='galleryImagem'>
                <img src={images[0].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
              <img src={CircleGallery} alt="" />
              </div>
             </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#productMain">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[1].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>

        </div>
            </Carousel.Item>
            <Carousel.Item>
          <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#productMain">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[2].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>

          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#productMain">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[2].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>

          </div>
          </Carousel.Item>
        
        </Carousel>
        <div className="carousel-indicators">
        {[0, 1, 2, 3].map(index => (
            <button  key={index}
            className={`indicator-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
            ></button>
        ))}
        </div>
    </div>
  );
}