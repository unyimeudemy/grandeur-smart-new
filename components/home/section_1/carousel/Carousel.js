// components/Carousel.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './Carousel.module.css'
import Section1 from '../section1/Section1';
import Section1b from '../section2/Section1b';
import Section1c from '../section3/Section1c';
import Section1d from '../section4/Section1d';
import Navbar from '@/components/global/navbar/Navbar';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000000,
  };

  return (
    <div className="bg-gradient-to-r to-[#5C755E] from-[#78A67C] w-[100%]  h-[1038px] pt-36">
      <Slider {...settings}>
        <Section1 />
        <Section1b />
        <Section1c />
        <Section1d />
      </Slider>
    </div>
  );
};

export default Carousel;
