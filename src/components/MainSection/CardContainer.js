import { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = ({ listOfRestaurant }) => (
  <div className="restaurant-container container">
    {listOfRestaurant.map(restaurant => (
      <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
    ))}
  </div>
);

export default CardContainer;
