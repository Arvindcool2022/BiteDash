const CarouselItem = object => (
  <div className="carousel__img-container">
    <img
      className="carousel__img"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${object.object.imageId}`}
      alt="food"
    />
  </div>
);

export default CarouselItem;
