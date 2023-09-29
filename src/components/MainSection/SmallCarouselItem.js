const SmallCarouselItem = object => {
  return (
    <div className="min-w-[190px] aspect-square">
      <img
        className="w-full h-full object-cover cursor-pointer"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${object.object.imageId}`}
        alt="food"
      />
    </div>
  );
};

export default SmallCarouselItem;
