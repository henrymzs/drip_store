import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GalleryProduct.css';


import SneakersView from '../../assets/carrosel/SneakersGallery.png'
import ArrowRight from '../../assets/carrosel/arrow-right.svg'
import ArrowLeft from '../../assets/carrosel/arrow-left.svg'


const images = [
    { src: SneakersView, alt: 'Imagem 1' },
    { src: SneakersView, alt: 'Imagem 2' },
    { src: SneakersView, alt: 'Imagem 3' },
    { src: SneakersView, alt: 'Imagem 4' },
    { src: SneakersView, alt: 'Imagem 5' }
];

const colors = ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF']

images.map(imagens => {
    <>
        <img src={imagens.src} alt="" />
    </>
});

export default function GalleryProduct() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className="carousel-container-view">
            <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                indicators={false}
                nextIcon={<img src={ArrowRight} aria-hidden="true" className="custom-next-icon" />}
                prevIcon={<img src={ArrowLeft} aria-hidden="true" className="custom-prev-icon" />}
            >
                <Carousel.Item>
                    <div className='galleryViewPrincipal'>
                        <div className='galleryViewExtra' style={{ backgroundColor: '#E2E3FF' }}>
                            <div className='galleryViewImagem'>
                                <img src={images[0].src} alt={images[activeIndex].alt} />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryViewPrincipal'>
                        <div className='galleryViewExtra' style={{ backgroundColor: '#FFE8BC' }}>
                            <div className='galleryViewImagem'>
                                <img src={images[0].src} alt={images[activeIndex].alt} />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryViewPrincipal'>
                        <div className='galleryViewExtra' style={{ backgroundColor: '#FFC0BC' }}>
                            <div className='galleryViewImagem'>
                                <img src={images[0].src} alt={images[activeIndex].alt} />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryViewPrincipal'>
                        <div className='galleryViewExtra' style={{ backgroundColor: '#DEC699' }}>
                            <div className='galleryViewImagem'>
                                <img src={images[0].src} alt={images[activeIndex].alt} />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryViewPrincipal'>
                        <div className='galleryViewExtra' style={{ backgroundColor: '#E8DFCF' }}>
                            <div className='galleryViewImagem'>
                                <img src={images[0].src} alt={images[activeIndex].alt} />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="viewOptions">

                {[0, 1, 2, 3, 4].map(index => (
                    <div
                        key={index}
                        style={{ backgroundColor: colors[index] }}
                        src={SneakersView}
                        className={`galleryOptions ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleSelect(index)}>
                        <img
                            src={SneakersView}
                        ></img>
                    </div>
                ))}
            </div>
        </div>
    );
}