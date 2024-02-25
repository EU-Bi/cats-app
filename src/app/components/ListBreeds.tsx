"use client";
import React, { FC, useState } from "react";
import { Option } from "../types/types";
import Image from "next/image";

const ListBreeds: FC<{ options: Option[] }> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div
      className=" relative p-[8px] min-w-36 bg-[#F8F8F7] rounded-[10px] flex justify-between items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="text-[#8C8C8C]">
        {selectedOption ? selectedOption.label : options[0].label}
      </button>
      <Image
        src="http://localhost:3000/img/arrowdown.svg"
        alt="arrowdown"
        width={12}
        height={12}
      />
      {isOpen && (
        <ul className=" absolute bg-[#FFFFFF] rounded-[30px] min-w-36 p-[12px] top-10 flex flex-col ">
          {options.map((option) => (
            <li
              key={option.value}
              className="text-[#8C8C8C] p-[4px]"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListBreeds;
