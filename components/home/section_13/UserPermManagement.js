import Image from 'next/image';

const UserPermManagement = () => {
  return (
    <div className="flex w-[1190px] h-[486px] mt-[108px] mx-[80px]">
      {/* Left Section */}
      <div className="w-[626px] h-[486px]">
        <Image
          src="/images/userpermission.svg"
          alt="User Permission"
          width={626}
          height={486}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-[564px] h-[486px] flex flex-col items-center">
        <div className="w-[482px] h-[234px] mt-[135px] mb-[117px] mx-[82px]">
          {/* Titles */}
          <div className="w-[452px] h-[55px] text-[40px] font-bold text-[#5C755E]">User Permission</div>
          <div className="w-[452px] h-[52px] mt-[4px] text-[36px] font-bold text-[#212121]">Management</div>

          {/* Description */}
          <div className="w-[482px] h-[110px] mt-[23px] flex flex-col justify-between text-[16px] font-medium text-[#212121]">
            <p>Customizable access levels for family members, guests, or Airbnb renters.</p>
            <p>Different permissions can be set for children (limited access) vs. Airbnb guests (temporary access).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPermManagement;
