const SmallCarouselItem = ({ object }) => (
  <div
    className=" aspect-square"
    onClick={() => window.open(object.action.link, '_blank')}
    draggable="false"
  >
    <img
      draggable="false"
      className="w-full h-full object-cover cursor-pointer"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${object.imageId}`}
      alt="food"
    />
  </div>
);

export default SmallCarouselItem;
