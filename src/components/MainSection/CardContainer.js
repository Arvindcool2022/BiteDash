import { restaurantList } from '../../utils/constants';
import Card from './Card';

const CardContainer = () => (
  <div className="restaurant-container container">
    {restaurantList.map(restaurant => (
      <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
    ))}
  </div>
);

export default CardContainer;
