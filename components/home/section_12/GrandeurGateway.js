import Image from "next/image";

const GrandeurGateway = () => {
  return (
    <div className=" flex justify-center items-center w-[100%] h-[784px] bg-gradient-to-l from-[#78A67C] to-[#5C755E]">
      <div className="w-[1191px] h-[601px] mx-[78px] mt-[109px] mb-[74px]">
        <Image
          src="/images/grandeurgateway.svg"
          alt="Grandeur gateway"
          width={1191}
          height={601}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GrandeurGateway;
