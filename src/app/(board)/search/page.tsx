import Back from "@/app/components/Back";
import NamePage from "@/app/components/NamePage";
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

const Search = () => {
  const chunkedArr: GridItem[][] = chunkArray(arr, 10);
  return (
    <div>
      <div className=" flex py-2 gap-[10px]">
        <Back />
        <NamePage />
      </div>
      <div className="w-full flex flex-col gap-3">
        {chunkedArr.map((template, index) => (
          <GridTemplate key={index} arr={template} />
        ))}
      </div>
    </div>
  );
};

export default Search;
