import { FC } from "react";
interface CardProps {
  numberOfStyle: number;
}

const styles: { [key: number]: string } = {
  1: "row-span-2 bg-gray-500 rounded-[20px]",
  2: "bg-gray-500 h-[140px] rounded-[20px]",
  3: "bg-gray-500 h-[140px] rounded-[20px]",
  4: "col-span-2 row-span-2 col-start-2 bg-gray-500 rounded-[20px]",
  5: "row-start-3 h-[140px] bg-gray-500 rounded-[20px]",
  6: "row-start-4 h-[140px] bg-gray-500 rounded-[20px]",
  7: "row-start-4 h-[140px] bg-gray-500 rounded-[20px]",
  8: "row-span-2 row-start-4 bg-gray-500 rounded-[20px]",
  9: "col-span-2 row-span-2 row-start-5 bg-gray-500 rounded-[20px]",
  10: "col-start-3 row-start-6 h-[140px] bg-gray-500 rounded-[20px]",
};

const Card: FC<CardProps> = ({ numberOfStyle }) => {
  const cardStyle = styles[numberOfStyle];

  return <div className={cardStyle}>{numberOfStyle}</div>;
};

export default Card;
