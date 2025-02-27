import Image from "next/image";

const InfoCards = () => {
  return (
    <div className="  xl:w-[1188px] h-auto xl:h-[1352px] mt-[18px] flex flex-col justify-center gap-[28px] mb-[126px]">
      <div className=" items-center w-full h-auto xl:h-[432px] flex flex-col xl:flex-row gap-[28px]">
        <div className=" ease-in-out relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundImage: "url('/images/smartroutine.svg')" }}>
          <Image
            src="/images/smartroutine_overlay.svg"
            alt="smart routine"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
        <div className="relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundImage: "url('/images/predictivesuggest.svg')" }}>
          <Image
            src="/images/predictivesuggest_overlay.svg"
            alt="predictive suggest"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
      </div>

      <div className=" items-center  w-full h-auto xl:h-[432px] flex flex-col xl:flex-row gap-[28px]">
        <div className="relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundImage: "url('/images/energyinsight.svg')" }}>
          <Image
            src="/images/energyinsight_overlay.svg"
            alt="energy insight"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
        <div className="relative w-[579px] h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundImage: "url('/images/geofencing.svg')" }}>
          <Image
            src="/images/geofencing_overlay.svg"
            alt="geo fencing"
            width={579}
            height={432}
            className="absolute"
          />
        </div>
      </div>


      <div className="w-full flex justify-center items-center ">
        <div className=" hidden xl:block items-center  xl:relative xl:w-full xl:h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundImage: "url('/images/eventbase.svg')" }}>
          <Image
            src="/images/eventbase_overlay.svg"
            alt="event base"
            width={1188}
            height={432}
            className="absolute"
          />
        </div>
        <div className="block xl:hidden w-[579px] h-[432px]">
          <Image
              src="/images/event-based-small.svg"
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
