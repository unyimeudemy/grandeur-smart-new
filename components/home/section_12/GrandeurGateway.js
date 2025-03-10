import Image from "next/image";

const GrandeurGateway = () => {
  return (
    <div className=" pt-[62px] flex justify-center items-center w-[100%] h-auto bg-gradient-to-l from-[#78A67C] to-[#5C755E]">
      <div className=" w-[900px] xl:w-[1191px] xl:h-[601px] mx-[78px] mt-[109px] mb-[74px] hidden xl:block">
        <Image
          src="/images/grandeurgateway.svg"
          alt="Grandeur gateway"
          width={1191}
          height={601}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" block xl:hidden xl:w-[650px]">
        <Image
          src="/images/gateway-vertical.svg"
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
