import React, { useState, useEffect } from 'react';
import {
  CAROUSEL_DATA,
  SMALL_CAROUSEL_DATA,
  RESTAURANT_DATA
} from '../utils/constants';

import Carousel from './MainSection/Carousel';
import SmallCarousel from './MainSection/SmallCarousel';
import Filters from './MainSection/Filters';
import CardContainer from './MainSection/CardContainer';

const MainSection = () => {
  const [carouselList, setCarouselList] = useState(CAROUSEL_DATA);
  const [smallCarouselList, setSmallCarouselList] =
    useState(SMALL_CAROUSEL_DATA);
  const [resList, setResList] = useState(RESTAURANT_DATA);

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

        setCarouselList(
          json.data.cards[0].card.card.gridElements.infoWithStyle.info
        );

        setSmallCarouselList(
          json.data.cards[1].card.card.gridElements.infoWithStyle.info
        );

        setResList(
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        setCarouselList(CAROUSEL_DATA);
        setSmallCarouselList(SMALL_CAROUSEL_DATA);
        setResList(RESTAURANT_DATA);
      }
    })();
  }, []);

  return (
    <section className="main-section">
      <Carousel carouselData={carouselList} />
      <SmallCarousel smallCarouselData={smallCarouselList} />
      <Filters
        cb={setResList}
        listOfRestaurant={resList}
        initialList={RESTAURANT_DATA}
      />
      <CardContainer listOfRestaurant={resList} />
    </section>
  );
};

export default MainSection;

// console.log(<CardContainer listOfRestaurant={resList} />);
// console.log(
//   React.createElement(CardContainer, { listOfRestaurant: { resList } })
// );
