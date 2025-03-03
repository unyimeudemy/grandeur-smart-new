import Image from "next/image";
import smartgadgetdevices from "/public/images/smartgadgetdevices.svg";

const Innovative = () => {
  return (
    <div className="xl:w-[1226px] xl:h-[813px] xl:mt-[138px] mt-7">
      <div className="w-full h-[124px] flex justify-center">
        <div className="w-[690px] h-[124px] flex flex-col items-center">
          <div className=" xl:w-full xl:h-[84px] flex flex-col text-[28px] items-center font-helvetica font-bold xl:text-[36px] text-[#212121]">
            <div className="mb-[-12px] text-center  ">Innovative Automation Suggestions</div>
            <div className="text-center">Embedded Throughout</div>
          </div>
          <div className="w-[521px] h-[22px] flex flex-col items-center font-roboto font-medium text-[16px] text-[#212121] mt-[18px]">
            <div>Explore practical scenarios where SMART automation shines</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" flex justify-center w-[586px] h-[420px] mt-[20px] xl:w-[1226px] xl:h-[620px] xl:mt-[69px] overflow-hidden">
          <Image
            src={smartgadgetdevices}
            alt="smart gadget devices"
            width={1226}
            height={620}
          />
        </div>
      </div>

    </div>
  );
};

export default Innovative;
