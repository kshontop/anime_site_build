"use client";
import React, { useState, useEffect } from "react";
import EpisodeButton from "./components/EpisodeButton";
import AnimeCardSecondary from "@/components/AnimeCardSecondary";
import { Separator } from "@/components/ui/separator";
import { IAnimeInfo, IEpisode } from "@/@types/anime";
import { Skeleton } from "@/components/ui/skeleton";

type Params = {
  params: {
    id: string;
  };
};
function WatchAnime({ params }: Params) {
  const [currentEp, setCurrentEp] = useState<IEpisode | null>(null);
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();

  const changeEpisodeCb = (ep: IEpisode) => {
    setCurrentEp(ep);
  };

  const fetchAnimeInfo = async () => {
    const data = await fetch("/api/anime/info/" + params.id, {
      next: { revalidate: 300 },
    });
    const json = await data.json();
    setAnimeInfo(json);
    setCurrentEp(json.episodes[0]);
  };

  useEffect(() => {
    fetchAnimeInfo();
  }, []);

  return (
    <div className="lg:ml-20 lg:mr-20 lg:mt-5 ml-2 mr-2 flex flex-col space-y-10">
      <div className="flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0 lg:h-[60vh]">
        <div className="w-full lg:w-1/5 space-y-5 h-full order-2 lg:order-1">
          <p className="text-xl font-bold">Episodes</p>
          <div className="flex flex-col space-y-2 h-[55vh] overflow-y-auto">
            {typeof animeInfo !== "undefined"
              ? animeInfo.episodes.map((ep, i) => (
                <EpisodeButton
                  key={i}
                  title={ep.title}
                  isCurrent={currentEp === ep}
                  cb={() => changeEpisodeCb(ep)}
                />
              ))
              : new Array(10)
                .fill(undefined)
                .map((_, i) => <Skeleton key={i} className="w-full h-12" />)}
          </div>
        </div>

        <div className="w-full lg:w-3/5 order-1 lg:order-2">
          {typeof animeInfo !== "undefined" && currentEp ? (
            <iframe
              src={currentEp.src}
              className="w-full h-[300px] lg:h-full"
            />
          ) : (
            <Skeleton className="w-full h-[300px] lg:h-full" />
          )}
        </div>

        <div className="w-full lg:w-1/5 order-3">
          <p className="text-xl font-bold">Animes Similaires</p>
          {new Array(5).fill(undefined).map((_, i) => (
            <AnimeCardSecondary
              key={i}
              title={"Tomo-chan wa Onnanoko! FRENCH"}
              poster={
                "https://vostfree.in/uploads/posts/2023-02/1677022896_tomo-chan_wa_onnanoko_vf.jpg"
              }
              link={
                "https://vostfree.in/1345-tomo-chan-wa-onnanoko-vf-ddl-streaming-1fichier-uptobox.html"
              }
            />
          ))}
        </div>
      </div>
      <Separator />
      {typeof animeInfo !== "undefined" ? (
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="w-[250px]">
            <img
              src={animeInfo.poster}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col space-y-3">
            <p className="text-2xl font-bold">{animeInfo.title}</p>
            <p
              className="text-gray-400"
              dangerouslySetInnerHTML={{
                __html: animeInfo.description || "",
              }}
            />
            <p className="font-bold text-gray-400">
              Rating: {animeInfo.rating}
            </p>
            <p className="font-bold text-gray-400">
              Genre: {animeInfo.genre?.join(",")}
            </p>
          </div>
        </div>
      ) : (
        <Skeleton className="h-[300px] w-full" />
      )}
    </div>
  );
}

export default WatchAnime;
