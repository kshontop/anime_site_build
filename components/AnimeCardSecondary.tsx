import React from "react";

function AnimeCardSecondary() {
  return (
    <div className="flex space-x-5 w-full items-center bg-front hover:text-primary cursor-pointer mt-5 hover:bg-front">
      <div className="w-14 cursor-pointer">
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
}

export default AnimeCardSecondary;
