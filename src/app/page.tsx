import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <aside className="activeFrame h-full w-1/2 relative flex justify-center items-center p-8">
      <Image
        src="/img/girl-and-pet.png"
        alt="girl-and-pet"
        className="h-screen"
        fill
      />
      <div className="w-full h-full bg-[#FBE0DC] rounded-[20px]"></div>
    </aside>
  );
}
