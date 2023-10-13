import React, { useState, useEffect, useContext } from 'react';
import {
  SWIGGY_API_URL_1,
  SWIGGY_API_URL_2,
  CAROUSEL_DATA,
  SMALL_CAROUSEL_DATA,
  RESTAURANT_DATA,
  ALLOW_CORS_ERROR_MSG
} from '../utils/constants';

import Carousel from '../components/MainSection/Carousel';
import SmallCarousel from '../components/MainSection/SmallCarousel';
import Filters from '../components/MainSection/Filters';
import CardContainer from '../components/MainSection/CardContainer';
import useOnlineStatus from '../hooks/useOnlineStatus';
import UserContext from '../utils/UserContext';

const MainSection = () => {
  const [carouselList, setCarouselList] = useState([]);
  const [smallCarouselList, setSmallCarouselList] = useState([]);
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const { URL } = useContext(UserContext);

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
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilterList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const fetchSwiggyData = async () => {
    try {
      const data = await fetch(URL).catch(e =>
        console.error('Not Fetched : ', e)
      );
      console.log(URL);
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
  }, [URL]);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1 className="mt-36 text-center text-2xl capitalize font-semibold">
        Oops! It seems like there's an issue with your internet connection.
        Please check your internet connection
      </h1>
    );

  return !(smallCarouselList && carouselList) ? (
    fallBack() //! if api returns undefined
  ) : (smallCarouselList.length && carouselList.length) === 0 ? (
    <h1 className="mt-36 text-center text-2xl capitalize font-semibold">
      loading...
    </h1>
  ) : (
    <section className="mt-28">
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
