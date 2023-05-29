import { idExtractor } from "@/lib/extractor";
import Link from "next/link";
import React from "react";

type AnimeCardProp = {
  title?: string;
  poster?: string;
  link?: string;
};

export const AnimeCard = ({ title, poster, link }: AnimeCardProp) => {
  return (
    <Link href={`/${idExtractor(link)}`}>
      <div className="flex flex-col space-y-5 h-full w-[150px] lg:h-[370px] lg:w-[200px] bg-front rounded-xl cursor-pointer hover:text-primary">
        <div className="relative h-[200px] lg:h-[300px] w-full hover:opacity-50 transition-all duration-700 ease-in-out">
          <img src={poster} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="p-2">
          <p className="line-clamp-1 text-sm font-bold">{title}</p>
        </div>
      </div>
    </Link>
  );
};
