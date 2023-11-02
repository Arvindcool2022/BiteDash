import { useRef } from 'react';
import CarouselItem from './CarouselItem';
import RightSvg from '../../utils/SVG/RightSvg';
import LeftSvg from '../../utils/SVG/LeftSvg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ carouselData }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 0,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          swipeToSlide: true
        }
      }
    ]
  };
  return carouselData.length === 0 ? null : (
    <div className="container">
      <div className="flex items-center justify-between mb-7">
        <h1 className=" text-3xl ">Best offers for you</h1>
        <div className="hidden lg:block">
          <button
            onClick={previous}
            className="me-3 w-10 h-10 bg-zinc-200 rounded-full ps-3"
          >
            <LeftSvg />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 bg-zinc-200 rounded-full ps-3"
          >
            <RightSvg />
          </button>
        </div>
      </div>
      {/* <div className="flex gap-3  overflow-hidden hover:overflow-x-scroll "> */}
      <Slider ref={sliderRef} {...settings}>
        {carouselData.map(item => (
          <CarouselItem key={item.id} object={item} />
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};
export default Carousel;
