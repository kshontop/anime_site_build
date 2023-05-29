import React from "react";
import Link from "next/link";
import { idExtractor } from "@/lib/extractor";

type AnimeProps = {
  title?: string;
  poster?: string;
  link?: string;
};

function AnimeCardSecondary({ title, poster, link }: AnimeProps) {
  return (
    <Link href={`/${idExtractor(link)}`}>
      <div className="flex w-full items-center bg-front hover:text-primary cursor-pointer mt-5 hover:bg-front">
        <div className="w-20 h-20 cursor-pointer">
          <img src={poster} className="h-full object-cover rounded-lg" />
        </div>
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCardSecondary;
