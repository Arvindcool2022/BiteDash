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
