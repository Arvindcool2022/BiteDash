import Card from './Card';
import { Link } from 'react-router-dom';

const CardContainer = ({ listOfRestaurant }) => {
  return listOfRestaurant.length === 0 ? (
    <h1 className="text-center p-20 italic text-5xl">Not Found</h1>
  ) : (
    <div className="grid gap-8 justify-items-center justify-center grid-cols-auto-fit-250 container">
      {listOfRestaurant.map(restaurant => (
        <Link key={restaurant.info.id} to={'/res/' + restaurant.info.id}>
          <Card restaurantObject={restaurant?.info} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
