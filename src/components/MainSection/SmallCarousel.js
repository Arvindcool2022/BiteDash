import SmallCarouselItem from './SmallCarouselItem';

const SmallCarousel = ({ smallCarouselData }) => {
  return smallCarouselData.length === 0 ? null : (
    <div className="sm-carousel container">
      <h1 className="sm-carousel-title">What's in your mind?</h1>
      <div className="sm-carousel__container">
        {smallCarouselData.map(item => (
          <SmallCarouselItem key={item.id} object={item} />
        ))}
      </div>
    </div>
  );
};

export default SmallCarousel;
