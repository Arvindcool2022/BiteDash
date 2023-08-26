import React from 'react';
import ReactDom from 'react-dom/client';
import logo from './chapter-04/delivery app logo.svg';
/*
header - sticky or fixed
    - div
        - logo
        - location -> canvas

    - navigation 
        - search -> inserts a search bar
        - offer 
        - help -> accordians and tabs
        - sign-in 
        - cart --> ????

section
    -div
        - 2 card carousel
    -div
        - dish type carousel
    -div
        - filters (if nav-bar crosses here it's contents changes to filter bar with small search)
    - container
        - dynamic cards

footer
    - links
    - copyrights
    - address 
    - contact
    - feedback
*/
const locations = [
  'chennai',
  'mumbai',
  'delhi',
  'kolkata',
  'hydrabad',
  'bangalore',
  'ahmedabad',
  'pune',
  'trivandaram'
];
const LocationNames = ({ array }) =>
  array.map(x => (
    <option className="header__options" value={x}>
      {x}
    </option>
  ));

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <img className="header__logo" src={logo} alt="logo" />
        <h3 className="header__brand-name">dash door</h3>
        <select className="header__drop-down" name="location">
          <LocationNames array={locations} />
        </select>
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-items">
          <i className="bi bi-search"></i>
          search
        </li>
        <li className="header__nav-items">
          <i className="bi bi-percent"></i>
          offer
        </li>
        <li className="header__nav-items">
          <i className="bi bi-info-circle"></i>
          help
        </li>
        <li className="header__nav-items">
          <i className="bi bi-person"></i>
          sign-in
        </li>
        <li className="header__nav-items">
          <button className="header__btn">
            <i className="bi bi-cart"></i>cart
          </button>
        </li>
      </ul>
    </header>
  );
};

const CarouselSlide = () => {};
const SmallCarouselItem = () => {};

const Carousel = () => (
  <div className="carousel container">
    <h1 className="carousel-title">Best offers for you</h1>
    <div className="carousel__container">
      <div className="carousel__img-container">
        <img
          className="carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d51fc17ab1049acb3b4cda413f86fad5"
        />
      </div>
      <div className="carousel__img-container">
        <img
          className="carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/28f92512e727f99bbb1c90d2f469b2de"
        />
      </div>
    </div>
  </div>
);

const SmallCarousel = () => (
  <div className="sm-carousel container">
    <h1 className="sm-carousel-title">What's in your mind?</h1>
    <div className="sm-carousel__container">
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
          alt="food"
        />
      </div>
    </div>
  </div>
);

const Filters = () => (
  <div className="container">
    <h1 className="filter-title">
      Restaurants with online food delivery in Chennai
    </h1>
    <div
      className="filters"
      style={{ border: '1px #666 solid', font: '600 2rem' }}
    >
      filters come here
    </div>
  </div>
);
const Card = () => (
  <div className="card">
    <div className="card__img-container">
      <img
        className="card__img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zoyngbzc8cj9cromm3yr"
        alt="food"
      />
      <span>15% off, upto Rs.200</span>
    </div>
    <div className="card__body">
      <h3 className="card__title">A2B Adyar Ananda Bhavan</h3>
      <p className="card__detail">South Indian, North Indian, Sweets</p>
      <p className="card__rating">
        4.8 <i className="bi bi-star-fill"></i>
        <span className="card__votes">(255)</span>
      </p>
    </div>
  </div>
);

const CardContainer = () => (
  <div className="restaurant-container container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
const MainSection = () => (
  <section className="main-section">
    <Carousel />
    <SmallCarousel />
    <Filters />
    <CardContainer />
  </section>
);

const Footer = () => {};

const AppLayout = () => (
  <div id="layout">
    <Header />
    <MainSection />
    <Footer />
  </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
