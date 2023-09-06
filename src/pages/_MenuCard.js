const MenuCard = ({ info }) => {
  const { name, price, defaultPrice, description, category, imageId } =
    info?.card?.info;

  if (name && (price || defaultPrice) && (description || category) && imageId) {
    return (
      <div
        className="menu-card flex"
        style={{
          marginBlock: '1rem',
          padding: '1rem'
        }}
      >
        <div className="card__text">
          <h3 className="card__name">{name}</h3>
          <p className="card__price">Rs.{price / 100 || defaultPrice / 100}</p>
          <p className="card__description">{description || category}</p>
        </div>
        <div className="card__img-container">
          <img
            // className="card__img"
            src={
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
              imageId
            }
          />
          <button className="card__btn">
            Add <small>+</small>
          </button>
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
