const SmallCarouselItem = object => {
  return (
    <div className="sm-carousel__img-container">
      <img
        className="sm-carousel__img"
        src={`https://media-assets.swiggy.com/${object.object.imageId}`}
        alt="food"
      />
    </div>
  );
};

export default SmallCarouselItem;
