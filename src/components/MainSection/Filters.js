import { useState } from 'react';

const Filters = ({ listOfRestaurant, filterResult, initialList }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchItem = e => {
    let value = e.target.value;
    setSearchValue(value); // to update in ui

    let filteredList = initialList.filter(item =>
      item?.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    filterResult(filteredList);
  };

  const topRating = () => {
    const filteredList = listOfRestaurant.filter(
      item => item?.info.avgRating >= 4
    );
    filterResult(filteredList);
  };

  const resetALL = () => {
    setSearchValue('');
    filterResult(initialList);
  };

  return (
    <div className="container">
      <h1 className=" text-3xl mb-7">
        Restaurants with online food delivery in Chennai
      </h1>
      <div className="flex flex-wrap gap-4 py-6 px-4 border border-x-0">
        <input
          className="py-4 px-5 rounded-full outline-1 outline-orange-200 border-none shadow-sm bg-orange-50 focus:bg-orange-200"
          type="search"
          value={searchValue}
          placeholder="Search..."
          onChange={searchItem}
        />
        <button
          className="py-4 px-7 rounded-full outline-1 outline-orange-400 border border-solid border-orange-200 cursor-pointer bg-transparent transition-all duration-150 ease-in-out hover:bg-orange-100 active:bg-orange-200"
          onClick={topRating}
        >
          {' '}
          4+ <i className="bi bi-star-fill text-xs"></i> rating
        </button>
        <button
          className="py-4 px-7 rounded-full outline-1 outline-orange-400 border border-solid border-orange-200 cursor-pointer bg-transparent transition-all duration-150 ease-in-out hover:bg-orange-100 active:bg-orange-200"
          onClick={resetALL}
        >
          {' '}
          reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
