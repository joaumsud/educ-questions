import React, { useState } from "react";
import './Carousel.css';

interface CarouselProps{
    images: string[];
};


const Carousel: React.FC<CarouselProps> = ({ images }) =>{
   
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () =>{
        setCurrentIndex((prevIndex: number)=> prevIndex - 1 % (images.length - 1))
    }
    const nextSlide = () =>{
        setCurrentIndex((prevIndex: number) => prevIndex + 1 % (images.length - 1));
    }

    return(
        <section className="carousel">
            <button onClick={prevSlide} className="carousel__button carousel__button__left">Prev</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel__image" />
            <button onClick={nextSlide} className="carousel__button carousel__button__right">Next</button>
        </section>
    );
};

export default Carousel