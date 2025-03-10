import Slider from 'react-slick';
import styles from './Carousel3.module.css';
import FlowDiagram from '../flowdiagram/FlowDiagram';
import FlowDiagram2 from '../flowdiagram2/FlowDiagram2';

// Custom Arrow Components
// const CustomPrevArrow = ({ className, style, onClick }) => (
//   <div
//     className={`${className} ${styles.customArrow}`}
//     style={{
//       ...style,
//       display: 'block',
//       left: '10px', // Adjust positioning
//       zIndex: 1,
//     }}
//     onClick={onClick}
//   >
//     {/* Custom content (e.g., an icon or character) */}
//     <span className={styles.arrowText}>&lt;</span>
//   </div>
// );

// const CustomNextArrow = ({ className, style, onClick }) => (
//   <div
//     className={`${className} ${styles.customArrow}`}
//     style={{
//       ...style,
//       display: 'block',
//       right: '10px', // Adjust positioning
//       zIndex: 1,
//     }}
//     onClick={onClick}
//   >
//     {/* Custom content (e.g., an icon or character) */}
//     <span className={styles.arrowText}>&gt;</span>
//   </div>
// );

const Carousel3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-[100%] bg-gradient-to-r from-[#5C755E] to-[#78A67C]">
      <Slider {...settings}>
          <FlowDiagram />
          <FlowDiagram2 />
      </Slider>
    </div>
  );
};

export default Carousel3;
