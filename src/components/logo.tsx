import Image from "next/image";
import { Cabin_Sketch } from "next/font/google";

const jersey = Cabin_Sketch({
  weight: "700",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className="flex items-center gap-2 ">
      <Image
        src="https://res.cloudinary.com/droheqpxn/image/upload/v1713918653/Screenshot_2024-04-24_at_03.05.28-removebg-preview_pyieib.png"
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
