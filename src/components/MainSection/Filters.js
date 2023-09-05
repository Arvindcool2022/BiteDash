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
      <h1 className="filter-title">
        Restaurants with online food delivery in Chennai
      </h1>
      <div className="filters">
        <input
          className="searchBar"
          type="search"
          value={searchValue}
          placeholder="Search..."
          onChange={searchItem}
        />
        <button className="btn btn--filter" onClick={topRating}>
          {' '}
          4+ <i className="bi bi-star-fill"></i> rating
        </button>
        <button className="btn btn--reset" onClick={resetALL}>
          {' '}
          reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
