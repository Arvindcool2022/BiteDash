const Card = prop => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    aggregatedDiscountInfoV3
  } = prop.restaurantObject;

  const discount1 = aggregatedDiscountInfoV3
    ? aggregatedDiscountInfoV3.header
    : '';
  const discount2 = aggregatedDiscountInfoV3
    ? aggregatedDiscountInfoV3.subHeader
    : '';

  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="food"
        />
        {discount1 !== undefined && discount2 !== undefined && (
          <span>{`${discount1} ${discount2}`}</span>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__detail">{cuisines.join(', ')}</p>
        <p className="card__rating">
          {avgRating}
          <i className="bi bi-star-fill"></i>
          <span className="card__votes">({totalRatingsString})</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
