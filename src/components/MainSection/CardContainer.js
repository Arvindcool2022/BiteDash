import { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = ({ listOfRestaurant }) => {
  // const { listOfRestaurant } = prop;

  const [resList, setResList] = useState(listOfRestaurant);
  useEffect(() => {
    (async function fetchData() {
      try {
        const URL =
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8438835&lng=80.05973639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(URL);
        if (!data.ok) {
          throw new Error(`Network response was not ok: ${data.status}`);
        }
        const json = await data.json();
        setResList(
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error gracefully, e.g., show an error message to the user
      }
    })();
  }, []);

  return (
    <div className="restaurant-container container">
      {resList.map(restaurant => (
        <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
      ))}
    </div>
  );

  // async function fetchData() {
  //   const URL =
  //     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8438835&lng=80.05973639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
  //   const data = await fetch(URL);
  //   const json = await data.json();
  //   console.log(
  //     json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  //   );
  //   setResList(
  //     json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  //   );
  // }
};

export default CardContainer;
