import Image from 'next/image';

const UserPermManagement = () => {
  return (
    <div className="flex xl:gap-7 flex-col xl:flex-row mt-[74px] xl:w-[1190px] xl:h-[486px] xl:mt-[108px] xl:mx-[80px]">
      <div className='w-full h-auto flex justify-center'>
        <div className=" w-[90%] xl:w-[626px] xl:h-[486px]">
          <Image
            src="/images/userpermission.svg"
            alt="User Permission"
            width={626}
            height={486}
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      <div className="  xl:w-[564px] xl:h-[486px] flex flex-col items-center">
        <div className="xl:w-[482px] xl:h-[234px] xl:mt-[135px] xl:mb-[117px] xl:mx-[82px]">
          {/* Titles */}
          <div className=" mt-[30px] text-center xl:text-left  text-[25px] xl:w-[452px] xl:h-[55px] xl:text-[40px] font-bold text-[#5C755E]">User Permission</div>
          <div className="text-center xl:text-left  text-[25px] xl:w-[452px] xl:h-[52px] xl:mt-[4px] xl:text-[36px] font-bold text-[#212121]">Management</div>

          {/* Description */}
          <div className=" gap-5 xl:gap-0 text-center xl:text-left px-4 xl:px-0  xl:w-[482px] xl:h-[110px] xl:mt-[23px] flex flex-col justify-between text-[13px] xl:text-[16px] font-semibold  text-[#212121]">
            <p>Customizable access levels for family members, guests, or Airbnb renters.</p>
            <p>Different permissions can be set for children (limited access) vs. Airbnb guests (temporary access).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPermManagement;
