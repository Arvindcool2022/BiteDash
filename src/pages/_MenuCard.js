import chevron from '../utils/SVG/chevron-right.svg';
import ItemList from './_ItemList';
import { useState } from 'react';

const MenuCard = ({ info }) => {
  // const [menuIndex, setMenuIndex] = useState(null);

  // const toggleAnswer = index => {
  //   if (menuIndex === index) {
  //     setMenuIndex(null);
  //   } else {
  //     setMenuIndex(index);
  //   }
  // };
  const [isOpen, setIsOpen] = useState(false);

  const title = info?.card?.card?.title || 'Menu Items';
  const items = info?.card?.card?.itemCards;

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between my-4 p-4 border-b-[1px] border-b-orange-700 bg-orange-100 rounded-lg shadow"
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        <img className="h-5" src={chevron} alt="menu-toggle" />
      </div>
      {isOpen &&
        items.map((item, index) => (
          <ItemList
            key={item.card.info.id}
            data={item}
            // isOpen={openQuestionIndex === index}
            // toggleFunc={() => toggleAnswer(index)}
          />
        ))}
    </div>
  );
};

export default MenuCard;
