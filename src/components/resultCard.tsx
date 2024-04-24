import { Montserrat } from "next/font/google";
import Image from "next/image";
import * as React from "react";
import { FaSkullCrossbones } from "react-icons/fa6";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import { RiGenderlessLine } from "react-icons/ri";
import { TbHeartbeat } from "react-icons/tb";
import { Character } from "@/helpers/interfaces";

/**
 * Props for the ResultCard component.
 */
export interface ResultCardProps {
  data: Pick<Character, "name" | "location" | "origin" | "image" | "status" | "gender">;
}
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
/**
 * ResultCard component displays information about a character.
 */
export default function ResultCard({ data: { name, location, origin, image, status, gender } }: ResultCardProps) {
  /**
   * StatusIcon component displays an icon based on the character's status.
   */
  const StatusIcon = ({ size }: { size: number }) => {
    switch (status) {
      case "Alive":
        return <TbHeartbeat color="green" size={size} />;
      case "Dead":
        return <FaSkullCrossbones color="black" size={size} />;
      case "unknown":
        return <MdOutlineQuestionMark color="gray" size={size} />;
      default:
        return null;
    }
  };

  /**
   * GenderIcon component displays an icon based on the character's gender.
   */
  const GenderIcon = ({ size }: { size: number }) => {
    switch (gender) {
      case "Male":
        return <IoMdMale color="#1E90FF" size={size} />;
      case "Female":
        return <IoMdFemale color="pink" size={size} />;
      case "Genderless":
        return <RiGenderlessLine color="gray" size={size} />;
      case "unknown":
        return <MdOutlineQuestionMark color="gray" size={size} />;
      default:
        return null;
    }
  };

  return (
    <div className={`block sm:flex items-center justify-between w-full gap-5 ${montserrat.className}`}>
      <div className={`flex items-start gap-5 ${montserrat.className}`}>
        <Image src={image} alt="placeholder" width={100} height={100} className="rounded-md w-14 sm:w-24 " />
        <div>
          <p className="text-xl sm:text-2xl font-semibold">{name}</p>
          <p className="hidden sm:block">
            <b className="font-medium">Origin:</b> {origin.name}
          </p>
          <p className="hidden sm:block">
            <b className="font-medium">Living At:</b> {location.name}
          </p>
          <p className="flex gap-2 sm:hidden">
            <b className="font-medium ">Status:</b>
            <StatusIcon size={20} />
          </p>
          <p className="flex gap-2 sm:hidden">
            <b className="font-medium ">Gender:</b>
            <GenderIcon size={20} />
          </p>
        </div>
      </div>
      <div className={`flex items-start gap-5 ${montserrat.className}`}>
        <div className="hidden sm:block">
          <p>Status</p>
          <StatusIcon size={50} />
        </div>
        <div className="hidden sm:block">
          <p>Gender</p>
          <GenderIcon size={50} />
        </div>
      </div>
    </div>
  );
}
