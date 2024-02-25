import Image from "next/image";
import React from "react";

const Back = () => {
  return (
    <div className="w-[40px] h-[40px] bg-[#FBE0DC] rounded-[10px] text-[#FF868E] text-[20px] flex justify-center items-center">
      <Image src="/img/arrowLeft.svg" alt="arrowLeft" width={20} height={20} />
    </div>
  );
};

export default Back;
