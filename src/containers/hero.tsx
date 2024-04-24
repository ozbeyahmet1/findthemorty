import { Jersey_25, Montserrat } from "next/font/google";
import Image from "next/image";
import * as React from "react";

const jersey25 = Jersey_25({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

interface HeroContainerProps {
  func: () => void;
}

export default function HeroContainer({ func }: HeroContainerProps) {
  return (
    <section className="w-full h-auto border-b-2">
      <div className="w-[90%] sm:w-full  container mx-auto sm:py-5 flex justify-between pb-5 sm:pb-0">
        <div className={`sm:py-20 ${jersey25.className}`}>
          <p className={`text-xl ${montserrat.className} mb-2`}>Step through the portal and find the characters.</p>
          <h1 className="text-5xl sm:text-8xl mb-3 sm:mb-8">All Rick and Morty characters are here</h1>
          <div className="flex gap-2">
            <button
              className={`${montserrat.className} px-6 py-2 rounded-md bg-purple-600 text-white text-base`}
              onClick={func}>
              Search
            </button>
            <button
              className={`${montserrat.className} px-6 py-2 rounded-md bg-pink-600 text-white text-base`}
              onClick={func}>
              Explore Characters
            </button>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/droheqpxn/image/upload/v1713928410/transparent-rick-and-morty-cartoon-rick-and-morty-characters-hugging65e6c3d8c8cef6.4639450517096222328225_b3n9v8.png"
          width={368 * 1.2}
          height={433 * 1.2}
          alt="Rick Sanchez from Rick and Morty"
          quality={100}
          className="z-40 p-0 animate-fade-in-down hidden sm:block"
        />
      </div>
    </section>
  );
}
