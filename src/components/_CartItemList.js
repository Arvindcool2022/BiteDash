import React from 'react';
import { RES_MENU_IMG } from '../utils/constants';

const CartItemList = ({ data }) => {
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
        <img src={RES_MENU_IMG + imageId} />
      </div>
    </div>
  );
};

export default CartItemList;
