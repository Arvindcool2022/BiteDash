import { useState } from 'react';
import Card from './Card';

const Filters = ({ listOfRestaurant, cb, initialList }) => {
  // const { listOfRestaurant, cb, initialList } = prop;
  const [searchValue, setSearchValue] = useState('');
  const searchItem = e => {
    setSearchValue(e.target.value);
    cb(
      initialList.filter(item =>
        item?.info.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
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
          placeholder="Search..."
          onChange={searchItem}
        />
        <button
          className="btn btn--filter"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              item => item?.info.avgRating >= 4.2
            );
            cb(filteredList);
          }}
        >
          {' '}
          4.2+ <i className="bi bi-star-fill"></i> rating
        </button>
        <button
          className="btn btn--reset"
          onClick={() => {
            setSearchValue(''); // this is not reseting the actual search box in browser
            document.querySelector('.searchBar').value = ''; // this is
            cb(initialList);
          }}
        >
          {' '}
          reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
