import { GridItem, Option } from "@/app/types/types";
import GridTemplate from "./GridTemplate";
import Back from "@/app/components/Back";
import NamePage from "@/app/components/NamePage";
import ListBreeds from "@/app/components/ListBreeds";
import Limit from "@/app/components/Limit";
import Sort from "@/app/components/Sort";
import Image from "next/image";

const arr: GridItem[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2123, 124124, 2352345,
  56756, 124124, 235235, 235235,
];
const options: Option[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const chunkArray = (arr: GridItem[], size: number): GridItem[][] => {
  const chunks: GridItem[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function Breeds() {
  const chunkedArr: GridItem[][] = chunkArray(arr, 10);
  return (
    <div className="w-full overflow-y-auto rounded-[20px] bg-white">
      <div className=" flex flex-row justify-between py-2">
        <Back />
        <NamePage />
        <ListBreeds options={options} />
        <ListBreeds options={options} />
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[10px] bg-[#F8F8F7]">
          <Image src="/img/DownSort.svg" alt=" " width={20} height={20} />
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[10px] bg-[#F8F8F7]">
          <Image src="/img/UpSort.svg" alt=" " width={20} height={20} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        {chunkedArr.map((template, index) => (
          <GridTemplate key={index} arr={template} />
        ))}
      </div>
    </div>
  );
}
