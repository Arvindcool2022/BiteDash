import { SMALL_CAROUSEL_DATA } from '../../utils/constants';
import SmallCarouselItem from './SmallCarouselItem';
import { useState, useEffect } from 'react';

const SmallCarousel = () => {
  const [SmallCarouselData, setSmallCarouselData] =
    useState(SMALL_CAROUSEL_DATA);
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
        console.log(
          json.data.cards[1].card.card.gridElements.infoWithStyle.info
        );
        setSmallCarouselData(
          json.data.cards[1].card.card.gridElements.infoWithStyle.info
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error gracefully, e.g., show an error message to the user
      }
    })();
  }, []);

  return (
    <div className="sm-carousel container">
      <h1 className="sm-carousel-title">What's in your mind?</h1>
      <div className="sm-carousel__container">
        {SmallCarouselData.map(item => (
          <SmallCarouselItem key={item.id} object={item} />
        ))}
        {/* <div className="sm-carousel__img-container">
            <img
              className="sm-carousel__img"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
              alt="food"
            />
          </div>*/}
      </div>
    </div>
  );
};

export default SmallCarousel;

// async function fetchData() {
//   const URL =
//     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8438835&lng=80.05973639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
//   const data = await fetch(URL);
//   const json = await data.json();
//   setSmallCarouselData(
//     json.data.cards[1].card.card.gridElements.infoWithStyle.info
//   );
// }
