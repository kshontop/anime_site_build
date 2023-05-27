"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IPopularAnime } from "@/@types/anime";
import { AnimeCard } from "@/components/AnimeCard";

export const PopularAnime = () => {
  const [animes, setAnimes] = useState<IPopularAnime[]>([]);

  const fetchAnimes = async () => {
    const res = await fetch("/api/anime/popular");
    setAnimes(await res.json());
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  return (
    <>
      {animes.length > 0
        ? animes.map((anime, index) => (
          <AnimeCard key={index} title={anime.title} poster={anime.poster} />
        ))
        : new Array(10)
          .fill(undefined)
          .map((i) => (
            <Skeleton
              key={i}
              className="h-[250px] w-[150px] lg:h-[400px] lg:w-[200px]"
            />
          ))}
    </>
  );
};
