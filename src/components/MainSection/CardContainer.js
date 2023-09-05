import { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = ({ listOfRestaurant }) => {
  return listOfRestaurant.length === 0 ? (
    <h1
      style={{
        textAlign: 'center',
        padding: '5rem',
        fontSize: '3rem',
        fontStyle: 'italic'
      }}
    >
      Not Found
    </h1>
  ) : (
    <div className="restaurant-container container">
      {listOfRestaurant.map(restaurant => (
        <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
      ))}
    </div>
  );
};

export default CardContainer;
