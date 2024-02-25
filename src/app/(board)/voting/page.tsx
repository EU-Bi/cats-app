import Back from "@/app/components/Back";
import NamePage from "@/app/components/NamePage";
import SearchPanel from "@/app/components/SearchPanel";
import VotingInfo from "@/app/components/VotingInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Voting() {
  return (
    <div className="h-full">
      <div className=" flex py-2 gap-[10px]">
        <Back />
        <NamePage />
      </div>

      <div
        className=" relative h-[360px] rounded-[20px] flex justify-center"
        style={{ background: `url('/img/testimg.png') 0% 0% / cover` }}
      >
        <div
          className=" absolute bottom-[-40px] h-[80px] w-[240px] flex rounded-[20px] border-4 border-white bg-white
           gap-[4px] overflow-hidden"
        >
          <button className="w-[80px] h-full flex items-center justify-center bg-[#97EAB9]">
            <Image src="/img/likeWhite.svg" alt="like" width={30} height={30} />
          </button>
          <button className="w-[80px] h-full flex items-center justify-center bg-[#FF868E]">
            <Image
              src="/img/favoriteWhite.svg"
              alt="favorites"
              width={30}
              height={30}
            />
          </button>
          <button className="w-[80px] h-full flex items-center justify-center bg-[#FFD280]">
            <Image
              src="/img/dislikeWhite.svg"
              alt="dislike"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
      <div className="mt-[60px]">
        <VotingInfo />
      </div>
    </div>
  );
}

export default Voting;
