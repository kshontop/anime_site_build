import React from "react";

export const AnimeCard = () => {
  return (
    <div className="flex flex-col space-y-5 h-[250px] w-[150px] lg:h-[320px] lg:w-[200px]">
      <div className="relative h-[200px] lg:h-[300px] w-full hover:opacity-50 cursor-pointer transition-all duration-700 ease-in-out">
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141911-LqaNFCgfcj3M.jpg"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <p className="line-clamp-2">Skip To Loafer</p>
      </div>
    </div>
  );
};
