const MenuCard = ({ info }) => {
  const { name, price, defaultPrice, description, category, imageId } =
    info?.card?.info;

  if (name && (price || defaultPrice) && (description || category) && imageId) {
    return (
      <div
        className="card"
        style={{
          marginBlock: '1rem',
          border: '1px red solid',
          padding: '1rem'
        }}
      >
        <div className="card__test">
          <h3>{name}</h3>
          <p>Rs.{price / 100 || defaultPrice / 100}</p>
          <p>{description || category}</p>
        </div>
        <div className="card__img-container">
          <img
            src={
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
              imageId
            }
          />
        </div>
      </div>
    );
  } else {
    console.log('hit');
    console.log(name, price, defaultPrice, description, imageId);
    return null;
  }
};

export default MenuCard;
