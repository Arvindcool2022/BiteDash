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
        - 2 card carosel
    -div
        - dish type carosel
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

const AppLayout = () => (
  <div id="layout">
    <Header />
  </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
