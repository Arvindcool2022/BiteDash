import React from 'react';
import ReactDom from 'react-dom/client';

import Header from './components/Header';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer';

const AppLayout = () => (
  <div id="layout">
    <Header />
    <MainSection />
    <Footer />
  </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

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
