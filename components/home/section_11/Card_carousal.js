import Image from "next/image";
import Slider from 'react-slick';





const Card_carousal = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };


    return (
        <div className="w-[100%] my-[50px]">
            <Slider {...settings}>
                <div className="bg-white w-[1189px] h-[312px] rounded-[20px] shadow-lg flex hover:cursor-pointer ">
                    <div className="w-[1124px] h-[273px] mt-[24px] mb-[15px] ml-[65px] flex gap-[113px]">
                    <div className="w-[517px] h-[273px] flex items-center justify-center">
                        <div className="w-[517px] h-[160px]">
                        <div className="w-[474px] h-[48px] font-helvetica font-bold text-[36px] text-[#212121]">
                            Energy Management Kit
                        </div>
                        <div className="w-[517px] h-[44px] mt-[18px] font-roboto font-medium text-[16px] text-[#212121]">
                            Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day
                        </div>
                        <Image
                            src="/images/NewEnergyLink.svg"
                            alt="Energy Link"
                            width={267}
                            height={22}
                            className="mt-[29px] w-[267px] h-[22px]"
                        />
                        </div>
                    </div>
                    <Image
                        src="/images/device_1_1.svg"
                        alt="Devices"
                        width={494}
                        height={273}
                        className="w-[494px] h-[273px]"
                    />
                    </div>
                </div>
                <div className="bg-white w-[1189px] h-[312px] rounded-[20px] shadow-md flex cursor-pointer">
                    <div className="w-[1121px] h-[160px] mt-[73px] mb-[79px] ml-[63px] mr-[3px] flex">
                        <div className="w-[439px] h-[160px]">
                        <div className="w-[439px] h-[48px] font-helvetica font-bold text-[36px] text-[#212121]">
                            Home Automation Kit
                        </div>
                        <div className="w-[439px] h-[44px] mt-[18px] font-roboto font-medium text-[16px] text-[#212121]">
                            Display automation possibilities for lighting, climate, and
                            appliance scheduling, all optimized for energy and efficiency.
                        </div>
                        <Image
                            src="/images/seeSmartLink.svg"
                            alt="See Smart Link"
                            width={308}
                            height={22}
                            className="mt-[29px]"
                        />
                        </div>
                        <div className="w-[682px] h-[160px] flex items-center justify-center">
                        <Image
                            src="/images/devices2.svg"
                            alt="Devices"
                            width={682}
                            height={128}
                        />
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[1189px] h-[312px] rounded-[20px] shadow-md flex cursor-pointer">
                    <div className="w-[1093px] h-[181px] mt-[65px] mb-[66px] ml-[65px] mr-[31px] flex">
                        <div className="w-[517px] h-[181px]">
                        <div className="w-[474px] h-[48px] font-helvetica font-bold text-[36px] text-[#212121]">
                            Security & Safety
                        </div>
                        <div className="w-[517px] h-[66px] mt-[18px] font-roboto font-medium text-[16px] text-[#212121]">
                            Showcase features like Geo-Fencing to adjust settings when users
                            leave or enter the home, and Event-Based Automation based on local
                            alerts (e.g., adjusting for extreme weather).
                        </div>
                        <Image
                            src="/images/viewSecurityLink.svg"
                            alt="View Security Link"
                            width={267}
                            height={22}
                            className="mt-[28px]"
                        />
                        </div>
                        <div className="w-[576px] h-[181px] flex items-center">
                        <Image
                            src="/images/devices3.svg"
                            alt="Devices"
                            width={576}
                            height={107}
                        />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Card_carousal;

  
  