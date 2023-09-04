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
  const [carouselList, setCarouselList] = useState([]);
  const [smallCarouselList, setSmallCarouselList] = useState([]);
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const URL =
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8438835&lng=80.05973639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(URL).catch(e =>
          console.error('Not Fetched : ', e)
        );
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
        setFilterList(
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.log(
          "%cIMPORTANT: Unable to fetch live data from Swiggy due to a CORS issue. To see live data, please install a 'CORS-Allow' extension in your browser.",
          'color:red;font-family:system-ui;font-size:2rem;font-weight:bold'
        );
        console.error('Error fetching data:', error);
        setCarouselList(CAROUSEL_DATA);
        setSmallCarouselList(SMALL_CAROUSEL_DATA);
        setResList(RESTAURANT_DATA);
        setFilterList(RESTAURANT_DATA);
      }
    })();
  }, []);

  return (
    <section className="main-section">
      <Carousel carouselData={carouselList} />
      <SmallCarousel smallCarouselData={smallCarouselList} />
      <Filters
        theFilteredList={setResList}
        listOfRestaurant={resList}
        initialList={filterList}
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
