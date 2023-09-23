import { useEffect } from 'react';
import { ALLOW_CORS_ERROR_MSG, RES_URL } from './constants';

const fetchData = async (resID, setState) => {
  try {
    const URL = RES_URL + resID;
    const data = await fetch(URL).catch(e =>
      console.error('Not Fetched : ', e)
    );
    if (!data.ok) {
      throw new Error(`Network response was not ok: ${data.status}`);
    }
    const json = await data.json();
    setState(json?.data?.cards);
  } catch (error) {
    console.log(ALLOW_CORS_ERROR_MSG, 'from Restaurant Page');
    console.error('Error fetching data:', error);
    setState(false);
  }
};

function useFetchResPageInfo(resID, setState) {
  useEffect(() => {
    fetchData(resID, setState);
  }, [resID, setState]);
}

export default useFetchResPageInfo;
