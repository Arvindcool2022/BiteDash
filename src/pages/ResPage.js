import { useEffect, useState } from 'react';

const ResPage = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const URL =
          'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8438835&lng=80.05973639999999&restaurantId=196103&catalog_qa=undefined&submitAction=ENTER';
        const data = await fetch(URL).catch(e =>
          console.error('Not Fetched : ', e)
        );
        if (!data.ok) {
          throw new Error(`Network response was not ok: ${data.status}`);
        }
        const json = await data.json();

        console.log(json);
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
  if (!resInfo)
    return (
      <h1
        style={{ backgroundColor: 'red', color: 'white', fontStyle: 'italic' }}
      >
        Unable to fetch live data from Swiggy for restaurant details due to a
        CORS issue. To see live data, please install a 'CORS-Allow' extension in
        your browser.
      </h1>
    );

  return (
    <div>
      <h1>{resInfo[0]?.card?.card?.info?.name}</h1>
    </div>
  );
};

export default ResPage;
