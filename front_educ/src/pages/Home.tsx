import React from 'react';
import Carousel from '../components/Carousel/Carousel';

const Home: React.FC = ()=>{
    const images = [
        'img/professor.png',
        'img/professor01.png',
        'img/professora.jpg',
    ];
    return(
        <>
        <h1 style={{ paddingTop: 20 }}>Bem-vindo ao Quest Fácil!</h1>
        <Carousel images={images} />
        </>
    );
};

export default Home;