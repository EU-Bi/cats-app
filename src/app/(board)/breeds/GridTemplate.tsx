import React, { FC } from "react";
import Card from "./Card";
import { GridItem } from "@/app/types/types";

type GridArray = GridItem[];

const GridTemplate: FC<{ arr: GridArray }> = ({ arr }) => {
  return (
    <div className={`grid grid-cols-3 grid-rows-6 gap-3 w-full h-full`}>
      {arr.map((item: number, index: number) => (
        <Card key={index} numberOfStyle={index+1} />
      ))}
    </div>
  );
};

export default GridTemplate;
