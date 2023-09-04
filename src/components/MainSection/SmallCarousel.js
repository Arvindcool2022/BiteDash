import SmallCarouselItem from './SmallCarouselItem';

const SmallCarousel = ({ smallCarouselData }) => (
  <div className="sm-carousel container">
    <h1 className="sm-carousel-title">What's in your mind?</h1>
    <div className="sm-carousel__container">
      {/* {smallCarouselList.map(item => console.log(item.id, ' => ', item))} */}
      {smallCarouselData.map(item => (
        <SmallCarouselItem key={item.id} object={item} />
      ))}
    </div>
  </div>
);

export default SmallCarousel;
