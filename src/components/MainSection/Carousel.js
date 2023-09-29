import CarouselItem from './CarouselItem';

const Carousel = ({ carouselData }) => {
  return carouselData.length === 0 ? null : (
    <div className="container">
      <h1 className=" text-3xl mb-7">Best offers for you</h1>
      <div className="flex gap-3 overflow-hidden">
        {carouselData.map(item => (
          <CarouselItem key={item.id} object={item} />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
