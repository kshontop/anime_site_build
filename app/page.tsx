import Carousel from "@/components/Carousel";
import { TopVf } from "@/partials/TopVf";
import TopVostfr from "@/partials/TopVostfr";
import { RecentVf } from "@/partials/RecentVf";
import { RecentVostfr } from "@/partials/RecentVostfr";
import { PopularAnime } from "@/partials/PopularAnime";

export default function Home() {
  return (
    <div className="lg:ml-20 lg:mr-20 lg:mt-5 flex flex-col space-y-10 ml-2 mr-2">
      <Carousel />
      <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0">
        <div className="flex flex-col space-y-10 w-full lg:w-3/4 items-center lg:items-start">
          <p className="text-2xl font-bold uppercase">Animés populaires</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-5">
            <PopularAnime />
          </div>
          <div className="flex flex-col space-y-10 lg:space-y-0 gap-5 lg:flex-row w-full">
            <div className="w-full lg:w-1/2 text-xl uppercase">
              <p>Episodes VF Récemment Ajoutés</p>
              <RecentVf />
            </div>
            <div className="w-full lg:w-1/2 text-xl uppercase">
              <p>ANIMES DE LA SAISON EN COURS</p>
              <RecentVostfr />{" "}
            </div>
          </div>
        </div>
        <div className="flex-col w-full lg:w-1/4 space-y-10">
          <div className="w-full lg:ml-10 lg:space-y-0">
            <p className="text-2xl font-bold mb-5">Top Animes VF</p>
            <TopVf />
          </div>
          <div className="w-full lg:ml-10 lg:space-y-0">
            <p className="text-2xl font-bold mb-5">Top Animes VOSTFR</p>
            <TopVostfr />
          </div>
        </div>
      </div>
    </div>
  );
}
