import Slider from 'react-slick';
import Image from "next/image"



const BigCarousal = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    return (
      <div className="w-[100%] h-[701px] mt-[98px] ml-[80px] mr-[83px] flex gap-[28px] bg-red-400">
        <Slider {...settings}>
                {/* <LeftImage src={customizeyourhome}/>
                <RightImage src={enhancecustomization}/> */}
                <div className="w-[579px] h-[701px] hover:cursor-pointer">
                    <Image
                        src="/images/humanpopcorn.svg"
                        alt="banner"
                        height={701}
                        width={579}
                    />
                </div>
                <div className="w-[579px] h-[701px] hover:cursor-pointer">
                    <Image
                        src="/images/drivercustomize.svg"
                        alt="banner"
                        height={701}
                        width={579}
                    />
                </div>
                <div className="w-[579px] h-[701px] hover:cursor-pointer">
                    <Image
                        src="/images/drivercustomize.svg"
                        alt="banner"
                        height={701}
                        width={579}
                    />
                </div>
                <div className="w-[579px] h-[701px] hover:cursor-pointer">
                    <Image
                        src="/images/drivercustomize.svg"
                        alt="banner"
                        height={701}
                        width={579}
                    />
                </div>
        </Slider>
      </div>
    );
  };
  
  export default BigCarousal;