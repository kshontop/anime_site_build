"use client";
import React, { useState, useEffect } from "react";
import EpisodeButton from "./components/EpisodeButton";
import AnimeCardSecondary from "@/components/AnimeCardSecondary";
import { Separator } from "@/components/ui/separator";

type Params = {
  params: {
    id: string;
  };
};
function WatchAnime({ params }: Params) {
  const [currentEp, setCurrentEp] = useState<number>(1);

  const changeEpisodeCb = (ep: number) => {
    setCurrentEp(ep);
  };
  return (
    <div className="lg:ml-20 lg:mr-20 lg:mt-5 ml-2 mr-2 flex flex-col space-y-10">
      <div className="flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0 lg:h-[60vh]">
        <div className="w-full lg:w-1/5 space-y-5 h-full order-2 lg:order-1">
          <p className="text-xl font-bold">Episodes</p>
          <div className="flex flex-col space-y-2 h-[55vh] overflow-y-auto">
            {new Array(20).fill(undefined).map((_, i) => (
              <EpisodeButton
                number={i + 1}
                isCurrent={i + 1 === currentEp}
                cb={changeEpisodeCb}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/5 order-1 lg:order-2">
          <iframe
            src="https://video.sibnet.ru/shell.php?videoid=5144044"
            className="w-full h-[300px] lg:h-full"
          />
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
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <div className="w-[250px]">
          <img
            src="https://vostfree.in/uploads/posts/2023-05/1684375680_mashle_vf.jpg"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-3">
          <p className="text-2xl font-bold">Mashle French</p>
          <p
            className="text-gray-400"
            dangerouslySetInnerHTML={{
              __html:
                "L'histoire se déroule dans un royaume où la magie est omniprésente et est considérée comme un don divin. Dans cette société, le rang social est déterminé par le potentiel magique et ceux qui n'en disposent pas sont punis de mort.<br><br><b>Mash Burnedead</b> est né sans pouvoirs magiques mais il a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'<b>élu divin</b>. Pour retrouver sa vie tranquille, <b>Mash</b> accepte.",
            }}
          />
          <p className="font-bold text-gray-400">Released: 18 Mai 2023</p>
          <p className="font-bold text-gray-400">Duration: 23 min</p>
          <p className="font-bold text-gray-400">
            Genre: Animes VF, Comédie, School Life, Action
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchAnime;
