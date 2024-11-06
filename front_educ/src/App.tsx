import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Carousel from './components/Carousel/Carousel';

const  App: React.FC = ()=> {

  const images = [
      'img/professor.png',
      'img/professor01.png',
      'img/professora.jpg',
  ];
  return (
    <>
      <Navbar/>
      <Home/>
      <Carousel images={images} />
    </>
  );
}

export default App;
