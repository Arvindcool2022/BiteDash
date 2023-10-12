import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { RES_MENU_IMG } from '../utils/constants';

const ItemList = ({ data }) => {
  const { name, description, price, imageId, defaultPrice } = data.card.info;
  const dispatch = useDispatch();

  const handleAddItem = item => {
    dispatch(addItem(item));
  };

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
        <img src={RES_MENU_IMG + imageId} />
        <button
          className="absolute font-bold whitespace-nowrap py-2 px-4 bg-white outline-none  rounded-lg bottom-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in hover:bg-orange-600 hover:text-white"
          onClick={() => handleAddItem(data)}
        >
          Add <small>+</small>
        </button>
      </div>
    </div>
  );
};

export default ItemList;
