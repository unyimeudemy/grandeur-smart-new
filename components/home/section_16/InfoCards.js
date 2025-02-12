import Image from "next/image";

const InfoCards = () => {
  return (
    <div className="w-[1188px] h-[1352px] mt-[18px] flex flex-col gap-[28px] mb-[126px]">
      {/* Top Two Cards */}
      <div className="w-full h-[432px] flex gap-[28px]">
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

      {/* Middle Two Cards */}
      <div className="w-full h-[432px] flex gap-[28px]">
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

      {/* Bottom Single Card */}
      <div className="relative w-full h-[432px] bg-cover bg-center hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundImage: "url('/images/eventbase.svg')" }}>
        <Image
          src="/images/eventbase_overlay.svg"
          alt="event base"
          width={1188}
          height={432}
          className="absolute"
        />
      </div>
    </div>
  );
};

export default InfoCards;
