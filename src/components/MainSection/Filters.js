import { useState } from 'react';

const Filters = ({ listOfRestaurant, theFilteredList, initialList }) => {
  const [none, triggerRender] = useState('');

  const searchItem = e => {
    triggerRender(e.target.value);
    let filteredList = initialList.filter(item =>
      item?.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    theFilteredList(filteredList);
  };

  const topRating = () => {
    const filteredList = listOfRestaurant.filter(
      item => item?.info.avgRating >= 4
    );
    theFilteredList(filteredList);
  };

  const resetALL = () => {
    triggerRender(''); // this is not reseting the actual search box in browser
    document.querySelector('.searchBar').value = ''; // this is
    theFilteredList(initialList);
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
