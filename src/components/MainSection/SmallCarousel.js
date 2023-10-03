import SmallCarouselItem from './SmallCarouselItem';

const SmallCarousel = ({ smallCarouselData }) => {
  return smallCarouselData.length === 0 ? null : (
    <div className=" container">
      <h1 className=" text-3xl mb-7">What's in your mind?</h1>
      <div className="flex overflow-hidden hover:overflow-x-scroll ">
        {smallCarouselData.map(item => (
          <SmallCarouselItem key={item.id} object={item} />
        ))}
      </div>
    </div>
  );
};

export default SmallCarousel;
