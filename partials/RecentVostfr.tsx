"use client";
import React from "react";
import AnimeCardSecondary from "@/components/AnimeCardSecondary";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IEpisodeRecent } from "@/@types/anime";

export const RecentVostfr = () => {
  const [animes, setAnimes] = useState<IEpisodeRecent[]>([]);

  const fetchAnimes = async () => {
    const res = await fetch("/api/anime/recentvostfr");
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
            link={anime.link}
          />
        ))
        : new Array(6)
          .fill(undefined)
          .map((i) => <Skeleton key={i} className="w-full h-20" />)}
    </div>
  );
};
