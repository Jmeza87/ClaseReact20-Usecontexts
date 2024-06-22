import React from 'react';
import carrusel01 from '../assets/img/carrusel01.jpg'
import carrusel02 from '../assets/img/carrusel02.jpg'
import carrusel03 from '../assets/img/carrusel03.jpg'


const Carrusel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carrusel01} className="d-block w-100" alt="..." height={700} />
          </div>
          <div className="carousel-item">
            <img src={carrusel02} className="d-block w-100" alt="..." height={700} />
          </div>
          <div className="carousel-item">
            <img src={carrusel03} className="d-block w-100" alt="..." height={700} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carrusel;
