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
    <div className="  xl:w-[1188px] h-auto xl:h-[1352px] mt-[18px] flex flex-col justify-center gap-[28px] mb-[126px]">
      <div className=" items-center w-full h-auto xl:h-[432px] flex flex-col xl:flex-row gap-[28px]">
        <div className=" ease-in-out relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer"
         style={{ backgroundImage: `url(${smartroutine.src})` }}>
          <Image
            // src="/images/smartroutine_overlay.svg"
            src={smartroutine_overlay}
            alt="smart routine"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
        <div className="relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" 
        // style={{ backgroundImage: "url('/images/predictivesuggest.svg')" }}
        style={{ backgroundImage: `url(${predictivesuggest.src})` }}
        >
          <Image
            // src="/images/predictivesuggest_overlay.svg"
            src={predictivesuggest_overlay}
            alt="predictive suggest"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
      </div>

      <div className=" items-center  w-full h-auto xl:h-[432px] flex flex-col xl:flex-row gap-[28px]">
        <div className="relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer"
        //  style={{ backgroundImage: "url('/images/energyinsight.svg')" }}
        style={{ backgroundImage: `url(${energyinsight.src})` }}
         
         >
          <Image
            // src="/images/energyinsight_overlay.svg"
            src={energyinsight_overlay}
            alt="energy insight"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
        <div className="relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer"
        //  style={{ backgroundImage: "url('/images/geofencing.svg')" }}
        style={{ backgroundImage: `url(${geofencing.src})` }}

         >
          <Image
            // src="/images/geofencing_overlay.svg"
            src={geofencing_overlay}
            alt="geo fencing"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
      </div>


      <div className="w-full flex justify-center items-center ">
        <div className=" hidden xl:block items-center  xl:relative xl:w-full xl:h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer"
        //  style={{ backgroundImage: "url('/images/eventbase.svg')" }}
        style={{ backgroundImage: `url(${eventbase.src})` }}

         >
          <Image
            // src="/images/eventbase_overlay.svg"
            src={eventbase_overlay}
            alt="event base"
            width={1188}
            height={432}
            className="absolute"
          />
        </div>
        <div className="block xl:hidden w-[579px] h-[432px]">
          <Image
              // src="/images/event-based-small.svg"
              src={event_based_small}
              alt="event base"
              width={604}
              height={271}
            />
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
