import { useEffect, useState } from 'react';
import MenuCard from './_MenuCard';
import { useParams } from 'react-router-dom';

const ResPage = () => {
  const [resInfo, setResInfo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const URL =
          'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8438835&lng=80.05973639999999&restaurantId=' +
          id;
        const data = await fetch(URL).catch(e =>
          console.error('Not Fetched : ', e)
        );
        if (!data.ok) {
          throw new Error(`Network response was not ok: ${data.status}`);
        }
        const json = await data.json();
        setResInfo(json?.data?.cards);
      } catch (error) {
        console.log(
          "%cIMPORTANT: Unable to fetch live data from Swiggy for restaurant details due to a CORS issue. To see live data, please install a 'CORS-Allow' extension in your browser.",
          'color:red;font-family:system-ui;font-size:2rem;font-weight:bold'
        );
        console.error('Error fetching data:', error);
        setResInfo(false);
      }
    })();
  }, []);

  if (!resInfo) {
    return (
      <h1
        style={{ backgroundColor: 'red', color: 'white', fontStyle: 'italic' }}
      >
        Unable to fetch live data from Swiggy for restaurant details due to a
        CORS issue. To see live data, please install a 'CORS-Allow' extension in
        your browser.
      </h1>
    );
  }

  if (resInfo.length === 0) return <h1 className="container">loading...</h1>;

  const {
    name = 'local restaurant',
    cuisines,
    costForTwoMessage: costForTwo,
    sla: { maxDeliveryTime: deliveryTime },
    avgRatingString,
    totalRatingsString
  } = resInfo[0]?.card?.card?.info;

  let menulist =
    resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  if (menulist.length > 16) {
    menulist = menulist.slice(0, 15);
  }
  console.log(menulist);
  return (
    <section className="res container">
      <div className="flex">
        <div className="res__info-card">
          <h1 className="res__name">{name}</h1>
          <p>{cuisines.join(', ')}</p>
          <h2>{deliveryTime}mins to deliver</h2>
          <h2> {costForTwo}</h2>
        </div>
        <div className="res__rating">
          <h3>{avgRatingString} rating</h3>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <section className="menu container">
        {menulist.map(item => (
          <MenuCard key={item?.card?.info?.id} info={item} />
        ))}
        {/* <MenuCard info={menulist[0]} /> */}
      </section>
    </section>
  );
};

export default ResPage;
