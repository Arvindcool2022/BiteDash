import SmallCarouselItem from './SmallCarouselItem';

const SmallCarousel = ({ smallCarouselData }) => {
  return (
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
};

export default SmallCarousel;

{
  /* <div className="sm-carousel__img-container">
      <img
        className="sm-carousel__img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
        alt="food"
      />
</div>*/
}
