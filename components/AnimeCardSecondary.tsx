import React from "react";

type AnimeProps = {
  title?: string;
  poster?: string;
};

function AnimeCardSecondary({ title, poster }: AnimeProps) {
  return (
    <div className="flex w-full items-center bg-front hover:text-primary cursor-pointer mt-5 hover:bg-front">
      <div className="w-20 h-20 cursor-pointer">
        <img src={poster} className="h-full object-cover rounded-lg" />
      </div>
      <div className="p-2">
        <p className="line-clamp-2 text-sm">{title}</p>
      </div>
    </div>
  );
}

export default AnimeCardSecondary;
