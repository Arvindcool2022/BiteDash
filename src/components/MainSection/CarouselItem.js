const CarouselItem = ({ object }) => (
  <div
    className="min-w-fit me-5"
    onClick={() => window.open(object.action.link, '_blank')}
    draggable="false"
  >
    <img
      draggable="false"
      className="w-full object-cover cursor-pointer"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${object.imageId}`}
      alt="food"
    />
  </div>
);
export default CarouselItem;
