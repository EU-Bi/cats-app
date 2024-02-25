import Back from "@/app/components/Back";
import NamePage from "@/app/components/NamePage";
import Upload from "@/app/components/Upload";
import Image from "next/image";
import React from "react";
import GridTemplate from "../breeds/GridTemplate";
import { GridItem } from "@/app/types/types";

const arr: GridItem[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2123, 124124, 2352345,
  56756, 124124, 235235, 235235,
];

const chunkArray = (arr: GridItem[], size: number): GridItem[][] => {
  const chunks: GridItem[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

function Gallery() {
  const chunkedArr: GridItem[][] = chunkArray(arr, 10);
  return (
    <div className="Gallery">
      <div className="flex flex-col gap-2">
        <div className=" flex py-2 gap-[10px]">
          <Back />
          <NamePage />
          <div className="h-10 w-36 bg-[#FBE0DC] rounded-[10px] flex flex-row items-center justify-center gap-2 text-[#FF868E] text-xs font-medium tracking-[2px] ml-auto ">
            <Image src="/img/upload.svg" alt="upload" width={15} height={15} />
            UPLOAD
          </div>
        </div>
        <div className="w-full bg-[#F8F8F7] rounded-[20px] flex flex-wrap justify-between items-center p-[20px] gap-y-[10px]">
          <div className="flex flex-col text-[#8C8C8C] text-xs gap-[10px]">
            ORDER
            <select className="h-[40px] w-[290px] px-[10px] py-[8px] bg-white rounded-[10px] outline-[#FF868E] text-base">
              <option value="order=RANDOM">Random</option>
              <option value="order=DESC">Desc</option>
              <option value="order=ASC">Asc</option>
            </select>
          </div>
          <div className="flex flex-col text-[#8C8C8C] text-xs gap-[10px]">
            TYPE
            <select className="h-[40px] w-[290px] px-[10px] py-[8px] bg-white rounded-[10px] outline-[#FF868E] text-base">
              <option value="">All</option>
              <option value="mime_types=jpg&mime_types=png">Static</option>
              <option value="mime_types=gif">Animated</option>
            </select>
          </div>
          <div className="flex flex-col text-[#8C8C8C] text-xs gap-[10px]">
            BREED
            <select className="h-[40px] w-[290px] px-[10px] py-[8px] bg-white rounded-[10px] outline-[#FF868E] text-base">
              <option value="">None</option>
              <option>Abracatabra</option>
            </select>
          </div>
          <div className="flex flex-col text-[#8C8C8C] text-xs gap-[10px]">
            LIMIT
            <div className="flex justify-center items-center gap-[10px]">
              <select className="h-[40px] w-[240px] px-[10px] py-[8px] bg-white rounded-[10px] outline-[#FF868E] text-base">
                <option value="limit=5">5 items per page</option>
                <option value="limit=10">10 items per page</option>
                <option value="limit=15">15 items per page</option>
                <option value="limit=20">20 items per page</option>
              </select>
              <button className="flex items-center justify-center bg-white h-[40px] w-[40px] rounded-[10px]">
                <Image
                  src="/img/update.svg"
                  alt="update"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {chunkedArr.map((template, index) => (
            <GridTemplate key={index} arr={template} />
          ))}
        </div>
      </div>
      <Upload />
    </div>
  );
}

export default Gallery;
