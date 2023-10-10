import React from 'react';

const ItemList = ({ data }) => {
  const { name, description, price, imageId, defaultPrice } = data.card.info;
  return (
    <div className="my-6 p-4 flex justify-between rounded-xl shadow-md">
      <div>
        <h3 className="font-oswald text-2xl mb-0">{name}</h3>
        <p className="mt-2 mb-6 font-medium">
          Rs.{price / 100 || defaultPrice / 100}
        </p>
        <p className="text-xs opacity-75">{description}</p>
      </div>
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
            imageId
          }
        />
        <button className="absolute font-bold whitespace-nowrap py-2 px-4 bg-white outline-none  rounded-lg bottom-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in hover:bg-gray-500 hover:text-white">
          Add <small>+</small>
        </button>
      </div>
    </div>
  );
};

export default ItemList;
