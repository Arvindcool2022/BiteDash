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
    <div className="p-2 rounded-xl cursor-pointer max-w-[300px] transition-all duration-150 ease-in-out hover:scale-95">
      <div className="relative rounded-xl overflow-hidden">
        <img
          className="w-full object-cover aspect-square"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="food"
        />
        {discount1 !== '' && discount2 !== '' && (
          <span className="oswald absolute bottom-0 left-0 w-full rounded p-1 text-white font-bold text-2xl text-center bg-gradient-to-t from-black to-transparent">{`${discount1} ${discount2}`}</span>
        )}
      </div>
      <div className="text-sm">
        <h3 className="text-xl">{name}</h3>
        <p className="font-thin">{cuisines.join(', ')}</p>
        <p className="card__rating">
          {avgRating}
          <i className="bi bi-star-fill ps-2"></i>
          <span className="font-thin text-gray-400 ms-4">
            ({totalRatingsString})
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
