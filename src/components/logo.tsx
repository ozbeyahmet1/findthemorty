import { Cabin_Sketch } from "next/font/google";
import Image from "next/image";

const jersey = Cabin_Sketch({
  weight: "700",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className="flex items-center gap-2 ">
      <Image
        src="https://res.cloudinary.com/droheqpxn/image/upload/v1713976518/SeekPng.com_rick-and-morty-png_44144_txzuta.png"
        width={50}
        height={80}
        alt="Logo"
      />
      <div className={`leading-[0] h-[40px] `}>
        <p className={`${jersey.className} text-xl`}>FIND MORTY</p>
        <p className="text-xs">Step into the portal</p>
      </div>
    </div>
  );
}
