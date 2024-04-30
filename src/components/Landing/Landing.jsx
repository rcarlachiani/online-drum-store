import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { Carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';

function Landing() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100 gap-5'>
      <div className='container container-carousel d-flex flex-column'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner carousel-css mb-3'>
            <div className='carousel-item active'>
              <img
                src='/images/tama.webp'
                className='d-block w-100'
                alt='baterias'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Baterias</h5>
                <p>Contamos con amplio stock de las marcas de primera linea</p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='/images/ludwig.webp'
                className='d-block w-100'
                alt='tambores'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Tambores</h5>
                <p>
                  Podras encontrar la mejor seleccion y la mas amplia variedad
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src='/images/zildjian.webp'
                className='d-block w-100'
                alt='platillos'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Platillos</h5>
                <p>
                  Somos representantes de las firmas mas importantes de la
                  historia
                </p>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <Link to='/productos'>
        <button className='btn btn-success'>
          <BsCart4 className='me-2 mb-1' /> Ingresar a la tienda
        </button>
      </Link>
    </div>
  );
}

export default Landing;
