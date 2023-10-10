import chevron from '../utils/SVG/chevron-right.svg';
import ItemList from './_ItemList';

const MenuCard = ({ info, isOpen, toggleFunc }) => {
  const title = info?.card?.card?.title || 'Menu Items';
  const items = info?.card?.card?.itemCards;

  return (
    <div>
      <div
        onClick={() => toggleFunc()}
        className="flex justify-between my-4 p-4 border-b-[1px] border-b-orange-700 bg-orange-100 rounded-lg shadow"
      >
        <h1 className="font-medium text-lg">
          {title} ({items.length})
        </h1>
        <img className="h-5" src={chevron} alt="menu-toggle" />
      </div>
      {isOpen &&
        items.map((item, index) => (
          <ItemList key={item.card.info.id} data={item} />
        ))}
    </div>
  );
};

export default MenuCard;
