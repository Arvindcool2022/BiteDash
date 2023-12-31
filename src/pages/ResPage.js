import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchResPageInfo from '../hooks/useFetchResPageInfo';
import MenuCard from '../components/_MenuCard';

const ResPage = () => {
  const [resInfo, setResInfo] = useState([]);
  const { id } = useParams();
  useFetchResPageInfo(id, setResInfo);

  const [menuIndex, setMenuIndex] = useState(0);

  const toggleAnswer = index => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  if (!resInfo) {
    return (
      <h1 className="bg-red-600 text-white italic">
        Unable to fetch live data from Swiggy for restaurant details due to a
        CORS issue. To see live data, please install a 'CORS-Allow' extension in
        your browser.
      </h1>
    );
  }

  if (resInfo.length === 0) return <h1 className="container">loading...</h1>;
  const {
    name = 'local restaurant',
    cuisines = ['burger', 'pizza'],
    costForTwoMessage: costForTwo = '₹500 For Two',
    sla: { maxDeliveryTime: deliveryTime = '30' },
    avgRatingString = '4.4',
    totalRatingsString = '10K+ ratings',
    aggregatedDiscountInfo: { descriptionList: discount },
    city = 'chennai',
    locality = 'porur'
  } = resInfo[0]?.card?.card?.info;

  console.log(resInfo[0]?.card?.card?.info);
  // console.log(locality, ', ', city);

  //TODO: console.log(name, '=>', discount);

  const menuData = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let menulist = menuData?.filter(
    c =>
      c.card?.['card']?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  if (menulist.length === 0 || false) {
    menulist = menuData.filter(
      c =>
        c.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    );
  }

  return (
    <section className="mt-28">
      <div className="container">
        <div className="flex justify-between border-b-2">
          <div className="capitalize p-4 ">
            <h1 className="text-4xl mb-2">{name}</h1>
            <p className="mt-0 text-slate-400">{cuisines.join(', ')}</p>
            <p className="my-2  text-slate-400">
              location: {locality}, {city}
            </p>
            <div className="flex justify-between">
              <p className="capitalize pe-4 font-mono font-bold">
                {deliveryTime} mins to deliver
              </p>
              <p className="capitalize pe-4 font-mono font-bold">
                {' '}
                {costForTwo}
              </p>
            </div>
          </div>
          <div className="items-center py-6 px-3 capitalize ">
            <h3 className="text-xl">{avgRatingString} rating</h3>
            <p className="text-gray-500">{totalRatingsString}</p>
          </div>
        </div>
        <section className="mt-20">
          {menulist.map((item, index) => (
            <MenuCard
              key={item?.card?.card?.title}
              info={item}
              isOpen={menuIndex === index}
              toggleFunc={() => toggleAnswer(index)}
            />
          ))}
        </section>
      </div>
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
