import Image from "next/image";

const Innovative = () => {
  return (
    <div className="w-[1226px] h-[813px] mt-[138px] ">
      <div className="w-full h-[124px] flex justify-center">
        <div className="w-[690px] h-[124px] flex flex-col items-center">
          <div className="w-full h-[84px] flex flex-col items-center font-helvetica font-bold text-[36px] text-[#212121]">
            <div className="mb-[-12px]">Innovative Automation Suggestions</div>
            <div>Embedded Throughout</div>
          </div>
          <div className="w-[521px] h-[22px] flex flex-col items-center font-roboto font-medium text-[16px] text-[#212121] mt-[18px]">
            <div>Explore practical scenarios where SMART automation shines</div>
          </div>
        </div>
      </div>
      <div className="w-[1226px] h-[620px] mt-[69px]">
        <Image
          src="/images/smartgadgetdevices.svg"
          alt="smart gadget devices"
          width={1226}
          height={620}
        />
      </div>
    </div>
  );
};

export default Innovative;
