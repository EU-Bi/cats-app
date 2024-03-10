import React from "react";
import Image from "next/image";

const Upload = (open: boolean) => {
  return (
    <div
      className={
        open
          ? "hidden"
          : "absolute top-1/2 -translate-y-1/2 h-full w-full p-8 flex"
      }
    >
      <div className="w-full h-full p-5 bg-[#F8F8F7] rounded-[20px]">
        <button className="flex w-[30px] justify-center items-center h-[30px] ml-auto bg-[#ffffff] rounded-[10px] text-[#FF868E]">
          <Image src="/img/close.svg" alt="close" width="16" height="16" />
        </button>
        <h1 className=" text-center text-3xl font-medium mb-2">
          Upload a .jpg or .png Cat Image
        </h1>
        <p className=" mb-10 text-center text-xl text-[#8C8C8C]">
          Any uploads must comply with the{" "}
          <a href="https://thecatapi.com/privacy" className="text-[#FF868E]">
            upload guidelines
          </a>{" "}
          or face deletion.
        </p>
        <label className="relative flex items-center justify-center w-full h-1/3 py-5 px-10 rounded-[20px] border-dashed border-[#FF868E] border-[1px] bg-white cursor-pointer">
          <input className="hidden" type="file" accept="image/jpeg,image/png" />
          <Image
            src="/img/photo-img.svg"
            width={200}
            height={200}
            alt="your-img"
          />
          <span className=" flex gap-2 justify-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <b className=" font-semibold">Drag here </b> your file or{" "}
            <b className=" font-semibold">Click here</b> to upload
          </span>
        </label>
        <p className=" m-5 text-center text-xl text-[#8C8C8C]">
          Image File Name: cat-puppy-on-garden--1586966191.jpg
        </p>
        {/* <p className=" text-center text-xl text-[#8C8C8C]">No file selected</p> */}
        <button className="block h-10 text-center text-xs tracking-[2px] uppercase text-white px-7 bg-[#FF868E] rounded-[10px] m-auto ">
          upload photo
        </button>
        <div className=" my-5 rounded-[10px] w-full p-5 bg-white flex gap-2">
          <Image src="/img/aprove.svg" alt="status" width={20} height={20} />
          <p className=" text-base text-[#8C8C8C]">
            Thanks for the Upload - Cat found!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
