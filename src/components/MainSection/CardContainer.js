import { RESTAURANT_DATA } from '../../utils/constants';
import Card from './Card';

const CardContainer = () => (
  <div className="restaurant-container container">
    {RESTAURANT_DATA.map(restaurant => (
      <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
    ))}
  </div>
);

export default CardContainer;
