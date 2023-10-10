import React, { useState, useEffect } from 'react';
import {
  SWIGGY_API_URL,
  CAROUSEL_DATA,
  SMALL_CAROUSEL_DATA,
  RESTAURANT_DATA,
  ALLOW_CORS_ERROR_MSG
} from '../utils/constants';

import Carousel from './MainSection/Carousel';
import SmallCarousel from './MainSection/SmallCarousel';
import Filters from './MainSection/Filters';
import CardContainer from './MainSection/CardContainer';
import useOnlineStatus from '../hooks/useOnlineStatus';

const MainSection = () => {
  const [carouselList, setCarouselList] = useState([]);
  const [smallCarouselList, setSmallCarouselList] = useState([]);
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const fallBack = () => {
    setCarouselList(CAROUSEL_DATA);
    setSmallCarouselList(SMALL_CAROUSEL_DATA);
    setResList(RESTAURANT_DATA);
    setFilterList(RESTAURANT_DATA);
  };

  const extractAndSetData = jsonData => {
    setCarouselList(
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    setSmallCarouselList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    setResList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilterList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // console.log(
    //   jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    //   ' use effect'
    // );
  };

  const fetchSwiggyData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL).catch(e =>
        console.error('Not Fetched : ', e)
      );

      if (!data.ok)
        throw new Error(`Network response was not ok: ${data.status}`);
      else {
        const json = await data.json();
        extractAndSetData(json);
      }
    } catch (error) {
      console.log(ALLOW_CORS_ERROR_MSG);
      console.error('Error fetching data:', error);
      fallBack();
    }
  };

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1 style={{ textAlign: 'center', marginBlock: '5rem' }}>
        Oops! It seems like there's an issue with your internet connection.
        Please check your internet connection
      </h1>
    );

  return !(smallCarouselList && carouselList) ? (
    fallBack() //! if api returns undefined
  ) : (smallCarouselList.length && carouselList.length) === 0 ? (
    <h1>loading...</h1>
  ) : (
    <section className="main-section">
      <Carousel carouselData={carouselList} />
      <SmallCarousel smallCarouselData={smallCarouselList} />
      <Filters
        filterResult={setResList}
        listOfRestaurant={resList}
        initialList={filterList}
      />
      <CardContainer listOfRestaurant={resList} />
    </section>
  );
};

export default MainSection;
