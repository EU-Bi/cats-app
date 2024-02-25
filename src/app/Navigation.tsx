"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const buttons = [
  {
    href: "/voting",
    bg: "bg-[#B4B7FF]",
    src: "/img/vote-table.png",
    width: 100,
    height: 100,
    text: "VOTING",
  },
  {
    href: "/breeds",
    bg: "bg-[#97EAB9]",
    src: "/img/pet-breeds.png",
    width: 117,
    height: 163,
    text: "BREEDS",
  },
  {
    href: "/gallery",
    bg: "bg-[#FFD280]",
    src: "/img/images-search.png",
    width: 112,
    height: 190,
    text: "GALLERY",
  },
];

function Navigation() {
  const pathname = usePathname();
  return (
    <section className="leftMenu w-1/2 flex flex-row justify-center p-8">
      <div className="">
        <Link href="/">
          <Image
            src="http://localhost:3000/img/logo.svg"
            alt="logo"
            width={100}
            height={25}
            className="mb-24"
          />
        </Link>

        <div className="flex flex-col gap-x-4 mb-20">
          <h1 className="text-[44px] text-[#1D1D1D]">Hi!👋</h1>
          <p className="text-[20px] text-[#8C8C8C]">Welcome to The Cat App</p>
        </div>
        <h2 className="text-[20px] text-[#1D1D1D]">
          Lets start using The Cat API
        </h2>
        <nav className="flex flex-row gap-x-4">
          {buttons.map((item) => (
            <Link key={item.text} href={item.href} className={styles.navCard}>
              <div
                className={`${styles.photoBlock} ${item.bg} ${
                  pathname === item.href ? styles.activePhoto : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div
                className={`${styles.buttonCard} ${
                  pathname === item.href ? styles.activeBtn : ""
                } `}
              >
                {item.text}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

const styles = {
  navCard: "navCard flex flex-col gap-y-4 group",
  photoBlock:
    "w-32 h-48 rounded-[20px] border-solid border-4 border-[#ffffff99] flex justify-center items-center group-hover:border-[#fff] group-active:",
  buttonCard:
    "bg-[#FFFFFF] w-32 py-2.5 text-[#FF868E] rounded-[10px] tracking-[2px] text-[12px] flex justify-center items-center group-hover:bg-[#FBE0DC] ",
  activeBtn: "!bg-[#FF868E] text-[#FFFFFF]",
  activePhoto: "!border-[#fbe0e4]",
};

export default Navigation;
