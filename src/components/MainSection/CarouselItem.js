const CarouselItem = object => (
  <div className="min-w-[420px]">
    <img
      className="w-full object-cover cursor-pointer"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${object.object.imageId}`}
      alt="food"
    />
  </div>
);

export default CarouselItem;
