import CarouselItem from './CarouselItem';

const Carousel = ({ carouselData }) => (
  <div className="carousel container">
    <h1 className="carousel-title">Best offers for you</h1>
    <div className="carousel__container">
      {carouselData.map(item => (
        <CarouselItem key={item.id} object={item} />
      ))}
    </div>
  </div>
);

export default Carousel;

{
  /* <div className="carousel__img-container">
  <img
    className="carousel__img"
    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d51fc17ab1049acb3b4cda413f86fad5"
  />
</div> */
}
