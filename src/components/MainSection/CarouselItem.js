const CarouselItem = object => {
  return (
    <div className="carousel__img-container">
      <img
        className="carousel__img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${object.object.imageId}`}
        alt="food"
      />
    </div>
    //     <div className="carousel__img-container">
    //     <img
    //       className="carousel__img"
    //       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d51fc17ab1049acb3b4cda413f86fad5"
    //     />
    //   </div>
  );
};

export default CarouselItem;
