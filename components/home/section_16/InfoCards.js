import Image from "next/image";
import smartroutine_overlay from "/public/images/smartroutine_overlay.svg";
import predictivesuggest_overlay from "/public/images/predictivesuggest_overlay.svg";
import energyinsight_overlay from "/public/images/energyinsight_overlay.svg";
import geofencing_overlay from "/public/images/geofencing_overlay.svg";
import eventbase_overlay from "/public/images/eventbase_overlay.svg";
import event_based_small from "/public/images/event-based-small.svg"; 
import smartroutine from "/public/images/smartroutine.svg";
import predictivesuggest from "/public/images/predictivesuggest.svg";
import energyinsight from "/public/images/energyinsight.svg";
import geofencing from "/public/images/geofencing.svg";
import eventbase from "/public/images/eventbase.svg";

const InfoCards = () => {
  return (
    <div className="  w-full h-auto flex flex-col gap-[28px] ">

        <div className="  items-center w-full h-auto xl:h-auto flex flex-col xl:flex-row gap-[28px] xl:justify-center">
          <div className="  items-center  bg-cover bg-center  w-[320px] h-[240px] xl:w-[550px]  xl:h-[410px] xl:rounded-[30px]"
          //  style={{ backgroundImage: "url('/images/eventbase.svg')" }}
          style={{ backgroundImage: `url(${smartroutine.src})` }}

          >
            <Image
              // src="/images/eventbase_overlay.svg"
              src={smartroutine_overlay}
              alt="event base"
              width={320}
              height={592}
              className=" relative w-[320px] h-[240px] xl:w-[630px]  xl:h-[550px] xl:mt-[-70px]"
            />
          </div>

          <div className="  items-center  bg-cover bg-center  w-[320px] h-[240px] xl:w-[550px]  xl:h-[410px] xl:rounded-[30px]"
          //  style={{ backgroundImage: "url('/images/eventbase.svg')" }}
          style={{ backgroundImage: `url(${predictivesuggest.src})` }}

          >
            <Image
              // src="/images/eventbase_overlay.svg"
              src={predictivesuggest_overlay}
              alt="event base"
              width={320}
              height={592}
              className=" relative w-[320px] h-[240px] mt-[-1px] xl:w-[630px]  xl:h-[550px] xl:mt-[-70px]"
            />
          </div>
        </div>

        <div className="  items-center w-full h-auto xl:h-auto flex flex-col xl:flex-row gap-[28px] xl:justify-center">
          <div className="  items-center  bg-cover bg-center  w-[320px] h-[240px] xl:w-[550px]  xl:h-[410px] xl:rounded-[30px]"
          //  style={{ backgroundImage: "url('/images/eventbase.svg')" }}
            style={{ backgroundImage: `url(${energyinsight.src})` }}
          >
            <Image
              // src="/images/eventbase_overlay.svg"
              src={energyinsight_overlay}
              alt="event base"
              width={320}
              height={592}
              className="relative w-[320px] h-[240px] mt-[-1px] xl:w-[630px]  xl:h-[550px] xl:mt-[-70px] "
            />
          </div>

          <div className="  items-center  bg-cover bg-center  w-[320px] h-[240px] xl:w-[550px]  xl:h-[410px] xl:rounded-[30px]"
          //  style={{ backgroundImage: "url('/images/eventbase.svg')" }}
          style={{ backgroundImage: `url(${geofencing.src})` }}

          >
            <Image
              // src="/images/eventbase_overlay.svg"
              src={geofencing_overlay}
              alt="event base"
              width={320}
              height={592}
              className="relative w-[320px] h-[240px] mt-[-1px] xl:w-[630px]  xl:h-[550px] xl:mt-[-70px] "
            />
          </div>
        </div>
        
        <div className=" w-full h-auto flex justify-center items-center ">
          <div className=" hidden xl:block items-center  bg-cover h-auto w-[1130px]"
            //style={{ backgroundImage: "url('/images/eventbase.svg')" }}
            style={{ backgroundImage: `url(${eventbase.src})` }}
          >
            <Image
              // src="/images/eventbase_overlay.svg"
              src={eventbase_overlay}
              alt="event base"
            
              className="relative"
            />
          </div>

          <div className="block xl:hidden w-[320px] h-[350px]">
            <Image
                // src="/images/event-based-small.svg"
                src={event_based_small}
                alt="event base"
                className=" rounded-[20px]"
              />
          </div>

        </div>

    </div>
  );
};

export default InfoCards;
