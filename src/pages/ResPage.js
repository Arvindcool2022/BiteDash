import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchResPageInfo from '../hooks/useFetchResPageInfo';
import MenuCard from './_MenuCard';

const ResPage = () => {
  const [resInfo, setResInfo] = useState([]);
  const { id } = useParams();
  useFetchResPageInfo(id, setResInfo);

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
      ?.itemCards ||
    resInfo[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards;

  if (menulist.length > 16) {
    menulist = menulist.slice(0, 15);
  }

  return (
    <section className="res container">
      <div className="flex">
        <div className="res__info-card">
          <h1 className="res__name">{name}</h1>
          <p className="res__cuisines">{cuisines.join(', ')}</p>
          <div className="flex">
            <p className="res__del">{deliveryTime} mins to deliver</p>
            <p className="res__del"> {costForTwo}</p>
          </div>
        </div>
        <div className="res__rating">
          <h3>{avgRatingString} rating</h3>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <section className="menu ">
        {menulist.map(item => (
          <MenuCard key={item?.card?.info?.id} info={item} />
        ))}
      </section>
    </section>
  );
};

export default ResPage;

//! abstracted to a custom hook => useFetchResPageInfo(resID, setState);

// const fetchData = async () => {
//   try {
//     const URL = RES_URL + id;
//     const data = await fetch(URL).catch(e =>
//       console.error('Not Fetched : ', e)
//     );
//     if (!data.ok) {
//       throw new Error(`Network response was not ok: ${data.status}`);
//     }
//     const json = await data.json();
//     setResInfo(json?.data?.cards);
//   } catch (error) {
//     console.log(ALLOW_CORS_ERROR_MSG, 'from Restaurant Page');
//     console.error('Error fetching data:', error);
//     setResInfo(false);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);
