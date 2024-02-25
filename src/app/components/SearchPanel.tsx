import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchPanel = () => {
  return (
    <div className=" flex flex-row justify-between w-full gap-[10px] mb-[10px]">
      <div className=" relative h-[60px] w-full">
        <input
          type="text"
          placeholder="Search for breeds by name"
          className=" w-full h-[60px] bg-white rounded-[20px] border-[none] py-[15px] px-[20px] outline-[#FF868E] text-[20px] font-[400] leading-[30px]"
        />
        <Link
          href="/search"
          className=" absolute h-[40px] w-[40px] top-[10px] right-[20px] rounded-[10px] bg-[#FBE0DC] flex justify-center items-center"
        >
          <Image src="/img/search.svg" alt="search" width={20} height={20} />
        </Link>
      </div>

      <nav className="flex flex-row gap-[10px]">
        <Link
          href="/likes"
          className="h-[60px] w-[60px] rounded-[20px] flex justify-center items-center bg-white"
        >
          <Image src="/img/like.svg" alt="like" width={30} height={30} />
        </Link>
        <Link
          href="/favorites"
          className="h-[60px] w-[60px] rounded-[20px] flex justify-center items-center bg-white"
        >
          <Image
            src="/img/favorite.svg"
            alt="favorite"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="/dislikes"
          className="h-[60px] w-[60px] rounded-[20px] flex justify-center items-center bg-white"
        >
          <Image src="/img/dislike.svg" alt="dislike" width={30} height={30} />
        </Link>
      </nav>
    </div>
  );
};

export default SearchPanel;
