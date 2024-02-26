import Back from "@/app/components/Back";
import NamePage from "@/app/components/NamePage";
import React from "react";

const Slug = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="">
      <div className=" flex flex-row py-2 gap-2">
        <Back />
        <NamePage />
        <NamePage />
      </div>
      <div
        className=" relative h-[360px] rounded-[20px] flex justify-center"
        style={{ background: `url('/img/testimg.png') 0% 0% / cover` }}
      >
        <div
          className=" absolute bottom-[-15px] flex rounded-[20px] border-4 border-white bg-white
           gap-[5px] p-[10px] overflow-hidden"
        >
          <button className="w-[10px] h-[10px] bg-[#FF868E] rounded-[10px]"></button>
          <button className="w-[10px] h-[10px] bg-[#FF868E] rounded-[10px]"></button>
          <button className="w-[10px] h-[10px] bg-[#FF868E] rounded-[10px]"></button>
          <button className="w-[10px] h-[10px] bg-[#FF868E] rounded-[10px]"></button>
        </div>
      </div>
      <div className=" relative h-52 rounded-[20px] border-2 border-[#fbe0dc] mt-14 flex flex-col items-center">
        <div
          className=" absolute h-[62px] top-[-31px] w-[192px] flex rounded-[20px] bg-white
           gap-[5px] overflow-hidden text-[#1D1D1D] justify-center items-center text-4xl"
        >
          Bazilii
        </div>
        <p className="text-xl text-[#8C8C8C] mt-[31px] h-[30px]">
          Family companion cat
        </p>
        ˝
        <div className="flex justify-around w-full">
          <div className="flex flex-col">
            <p className="text-[#1D1D1D] text-base font-medium">Temperament:</p>
            <span className="text-[#8C8C8C] w-[270px]">
              Active, Energetic, Independent, Intelligent, Gentle
            </span>
          </div>
          <div className="w-2/5 flex flex-col gap-[10px]">
            <p className="text-[#1D1D1D] text-base font-medium">
              Origin: <span className="text-[#8C8C8C] w-[270px]">USA</span>
            </p>
            <p className="text-[#1D1D1D] text-base font-medium">
              Weight: <span className="text-[#8C8C8C] w-[270px]">USA</span>
            </p>
            <p className="text-[#1D1D1D] text-base font-medium">
              Life span: <span className="text-[#8C8C8C] w-[270px]">USA</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;
