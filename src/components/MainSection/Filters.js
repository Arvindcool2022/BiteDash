import { useState, useContext } from 'react';
import UserContext from '../../utils/UserContext';

const Filters = ({ listOfRestaurant, filterResult, initialList }) => {
  const [searchValue, setSearchValue] = useState('');
  const { place } = useContext(UserContext);

  const searchItem = e => {
    let value = e.target.value;
    setSearchValue(value);

    let filteredList = initialList.filter(item =>
      item?.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    filterResult(filteredList);
  };

  const filterByTopRating = () => {
    const filteredList = listOfRestaurant.filter(
      item => item?.info.avgRating >= 4
    );
    filterResult(filteredList);
  };

  const resetFilters = () => {
    setSearchValue('');
    filterResult(initialList);
  };

  return (
    <div className="container">
      <h1 className=" text-3xl mb-7">
        Restaurants with online food delivery in{' '}
        <span className="capitalize">{place}</span>
      </h1>
      <div className="flex flex-wrap gap-4 py-6 px-4 border border-x-0">
        <input
          className="py-4 px-5 rounded-full outline-1 outline-orange-200 border-none shadow-sm bg-orange-50 focus:bg-orange-200"
          type="search"
          value={searchValue}
          placeholder="Search..."
          onChange={searchItem}
          data-testid="searchinput"
        />
        <button
          data-testid="topRes"
          className="py-4 px-7 rounded-full outline-1 outline-orange-400 border border-solid border-orange-200 cursor-pointer bg-transparent transition-all duration-150 ease-in-out hover:bg-orange-100 active:bg-orange-200"
          onClick={filterByTopRating}
        >
          4+ <i className="bi bi-star-fill text-xs"></i> rating
        </button>
        <button
          className="py-4 px-7 rounded-full outline-1 outline-orange-400 border border-solid border-orange-200 cursor-pointer bg-transparent transition-all duration-150 ease-in-out hover:bg-orange-100 active:bg-orange-200"
          onClick={resetFilters}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
