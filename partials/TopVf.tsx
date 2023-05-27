"use client";
import React from "react";
import AnimeCardSecondary from "@/components/AnimeCardSecondary";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ITopVfAnime } from "@/@types/anime";

export const TopVf = () => {
  const [animes, setAnimes] = useState<ITopVfAnime[]>([]);

  const fetchAnimes = async () => {
    const res = await fetch("/api/anime/topvf");
    setAnimes(await res.json());
  };

  useEffect(() => {
    fetchAnimes();
  }, []);
  return (
    <div className="flex flex-col space-y-5">
      {animes.length > 0
        ? animes.map((anime, index) => (
          <AnimeCardSecondary
            key={index}
            title={anime.title}
            poster={anime.poster}
          />
        ))
        : [1, 2, 3].map((i) => <Skeleton key={i} className="w-full h-20" />)}
    </div>
  );
};
