const SmallCarouselItem = object => {
  return (
    <div className="sm-carousel__img-container">
      <img
        className="sm-carousel__img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${object.object.imageId}`}
        alt="food"
      />
    </div>
  );
};

export default SmallCarouselItem;
