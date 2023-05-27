import React from "react";

type AnimeCardProp = {
  title?: string;
  poster?: string;
};

export const AnimeCard = ({ title, poster }: AnimeCardProp) => {
  return (
    <div className="flex flex-col space-y-5 h-full w-[150px] lg:h-[400px] lg:w-[200px] bg-front rounded-xl">
      <div className="relative h-[200px] lg:h-[300px] w-full hover:opacity-50 cursor-pointer transition-all duration-700 ease-in-out">
        <img src={poster} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="p-2">
        <p className="line-clamp-2 text-sm">{title}</p>
      </div>
    </div>
  );
};
