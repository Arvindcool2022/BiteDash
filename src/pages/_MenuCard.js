const MenuCard = ({ info }) => {
  const { name, price, defaultPrice, description, category, imageId } =
    info?.card?.info;

  const formattedPrice = price / 100 || defaultPrice / 100;
  const formattedDescription = description || category;

  if (name && formattedPrice && formattedDescription && imageId) {
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
          <p className="card__price">Rs.{formattedPrice}</p>
          <p className="card__description">{formattedDescription}</p>
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
    console.log('Card data is incomplete:', {
      name,
      formattedPrice,
      formattedDescription,
      imageId
    });
    return null;
  }
};

export default MenuCard;
