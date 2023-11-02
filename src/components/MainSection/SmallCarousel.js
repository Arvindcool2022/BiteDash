import { useRef } from 'react';
import SmallCarouselItem from './SmallCarouselItem';
import RightSvg from '../../utils/SVG/RightSvg';
import LeftSvg from '../../utils/SVG/LeftSvg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SmallCarousel = ({ smallCarouselData }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5.2,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrow: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      }
    ]
  };
  return smallCarouselData.length === 0 ? null : (
    <div className=" container">
      <div className="flex items-center justify-between mb-7">
        <h1 className=" text-3xl ">What's in your mind?</h1>
        <div className="hidden sm:block">
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
      <Slider ref={sliderRef} {...settings}>
        {smallCarouselData.map(item => (
          <SmallCarouselItem key={item.id} object={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SmallCarousel;
