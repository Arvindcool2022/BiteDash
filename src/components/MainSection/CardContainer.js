import Card from './Card';
import { Link } from 'react-router-dom';

const CardContainer = ({ listOfRestaurant }) => {
  return listOfRestaurant.length === 0 ? (
    <h1
      style={{
        textAlign: 'center',
        padding: '5rem',
        fontSize: '3rem',
        fontStyle: 'italic'
      }}
    >
      Not Found
    </h1>
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
