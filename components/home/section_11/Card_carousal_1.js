import Image from "next/image";
import Slider from 'react-slick';





const Card_carousal_1 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
      };


    return (
        <div className=" w-[100%] mt-[30px]  ">
            <Slider {...settings}>

                <div className="  w-[300px] h-[400px] xl:h-[312px] rounded-[30px] ">
                    <div className="  w-full h-full flex justify-center items-center ">
                        <div className=" bg-white flex flex-col xl:flex-row items-center xl:items-center xl:justify-between p-[24px] w-[330px] h-[481px] xl:h-[312px] xl:w-[1289px] rounded-[20px] shadow-lg">
                            <div className="    mt-[40px] xl:mt-0 xl:w-[517px] xl:h-[160px] xl:ml-[30px] ">
                                <div className=" text-[19px] xl:text-[24px] font-helvetica font-bold  text-[#212121]">
                                        Energy Management Kit
                                </div>
                                <div className=" mt-[10px] xl:mt-0 xl:mb-[26px] text-[13px] xl:text-[15px] font-medium font-roboto  text-[#212121]">
                                    Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day
                                </div>

                                <Image
                                    src="/images/NewEnergyLink.svg"
                                    alt="Energy Link"
                                    width={267}
                                    height={22}
                                    className="my-[15px] xl:mt-0 w-[250px]"
                                />
                            </div>
                            <div className="   flex justify-center items-center w-[300px] h-[230px] xl:w-[460px] xl:h-[350px] relative overflow-hidden">
                                <Image
                                    src="/images/device_1_1.svg"
                                    alt="Devices"
                                    fill
                                    style={{ objectFit: "contain" }} 

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="  w-[300px] h-[400px] xl:h-[312px] rounded-[30px] ">
                    <div className="  w-full h-full flex justify-center items-center ">
                        <div className=" bg-white flex flex-col xl:flex-row items-center xl:items-center xl:justify-between p-[24px] w-[330px] h-[481px] xl:h-[312px] xl:w-[1289px] rounded-[20px] shadow-lg">
                            <div className="    mt-[40px] xl:mt-0 xl:w-[517px] xl:h-[160px] xl:ml-[30px] ">
                                <div className=" text-[19px] xl:text-[24px] font-helvetica font-bold  text-[#212121]">
                                        Energy Management Kit
                                </div>
                                <div className=" mt-[10px] xl:mt-0 xl:mb-[26px] text-[13px] xl:text-[15px] font-medium font-roboto  text-[#212121]">
                                    Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day
                                </div>

                                <Image
                                    src="/images/NewEnergyLink.svg"
                                    alt="Energy Link"
                                    width={267}
                                    height={22}
                                    className="my-[15px] xl:mt-0 w-[250px]"
                                />
                            </div>
                            <div className="   flex justify-center items-center w-[300px] h-[230px] xl:w-[460px] xl:h-[350px] relative overflow-hidden">
                                <Image
                                    src="/images/device_1_1.svg"
                                    alt="Devices"
                                    fill
                                    style={{ objectFit: "contain" }} 

                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className=" h-[300px] xl:h-[312px] ">
                    <div className="  w-full h-full flex justify-center items-center">
                        <div className="bg-white flex flex-col xl:flex-row xl:items-center xl:justify-between p-[24px] w-[330px] h-[481px] xl:h-[312px] xl:w-[1289px] rounded-[20px]  shadow-lg">
                            <div className=" xl:w-[517px] xl:h-[160px] xl:ml-[30px] ">
                                <div className="text-[19px] xl:text-[24px] font-helvetica font-bold  text-[#212121]">
                                        Energy Management Kit
                                </div>
                                <div className=" xl:mb-[26px] text-[13px] xl:text-[15px]  font-roboto font-medium text-[#212121]">
                                    Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day
                                </div>

                                <Image
                                    src="/images/NewEnergyLink.svg"
                                    alt="Energy Link"
                                    width={267}
                                    height={22}

                                />
                            </div>
                            <div className=" ml-[-20px] flex justify-center xl:w-[460px] xl:h-[350px] relative overflow-hidden">
                                <Image
                                    src="/images/device_1_1.svg"
                                    alt="Devices"
                                    fill
                                    style={{ objectFit: "contain" }} 
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
            </Slider>
        </div>
    )
}

export default Card_carousal_1;

  
  