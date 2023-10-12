import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItemList from '../components/_CartItemList';
import { clearCart } from '../store/cartSlice';

const Cart = () => {
  const items = useSelector(store => store.cart.items);

  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const totalPrice = items.reduce((acc, currentItem) => {
    const data = currentItem.card.info;
    const price = data.price > 0 ? data.price : data.defaultPrice || 0;
    return acc + price;
  }, 0);

  return (
    <section className="container">
      <div className="flex justify-between bg-orange-100 p-4 capitalize font-semibold items-center rounded-lg shadow-lg">
        <h1 className="text-2xl">Cart</h1>
        <button
          className="outline outline-2 outline-orange-600 py-1 px-4 text-sm capitalize rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white active:scale-95"
          onClick={clearCartItems}
        >
          clear all
        </button>
      </div>
      {items.length === 0 ? (
        <p className="my-6 text-lg font-medium text-center">
          Looks like your cart is empty.
        </p>
      ) : (
        items.map(item => <CartItemList key={item.card.info.id} data={item} />)
      )}
      {items.length !== 0 && (
        <div className="border-t-2 py-6 my-4 text-center">
          <p className="text-xl capitalize">
            total = Rs.{Math.floor(totalPrice / 100)}
          </p>
        </div>
      )}
    </section>
  );
};

export default Cart;
