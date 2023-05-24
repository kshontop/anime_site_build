import React from "react";

export const AnimeCard = () => {
  return (
    <div className="flex flex-col space-y-5 h-[400px] w-[200px]">
      <div className="h-[280] w-full">
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
