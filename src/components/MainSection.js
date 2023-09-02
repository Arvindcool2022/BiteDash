import Carousel from './MainSection/Carousel';
import SmallCarousel from './MainSection/SmallCarousel';
import Filters from './MainSection/Filters';
import CardContainer from './MainSection/CardContainer';
import { RESTAURANT_DATA } from '../utils/constants';
import React, { useState } from 'react';

const MainSection = () => {
  const [resList, setResList] = useState(RESTAURANT_DATA);

  // console.log(<CardContainer listOfRestaurant={resList} />);
  // console.log(
  //   React.createElement(CardContainer, { listOfRestaurant: { resList } })
  // );

  return (
    <section className="main-section">
      <Carousel />
      <SmallCarousel />
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
