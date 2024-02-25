import Image from "next/image";
import React from "react";

const VotingInfo = () => {
  return (
    <div className="flex h-[55px] bg-[#F8F8F7] rounded-[10px] items-center p-4 gap-3">
      <div className=" rounded-[5px] bg-white text-[#1D1D1D] py-1 px-3">
        22;40
      </div>
      <p className="text-[#8C8C8C] text-base">
        Image ID: <span className="text-[#1D1D1D]">12123</span> was added to
        TUTUT
      </p>
      <Image
        className="ml-auto"
        src="/img/likeColor.svg"
        width={20}
        height={20}
        alt="TUTU"
      />
    </div>
  );
};

export default VotingInfo;
