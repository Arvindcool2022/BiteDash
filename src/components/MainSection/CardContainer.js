import Card from './Card';

const CardContainer = ({ listOfRestaurant }) => {
  // const { listOfRestaurant } = prop;
  return (
    <div className="restaurant-container container">
      {listOfRestaurant.map(restaurant => (
        <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
      ))}
    </div>
  );
};

export default CardContainer;
