import { AnimeCard } from "@/components/AnimeCard";
import Carousel from "@/components/Carousel";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex p-5 justify-between bg-[#1c1c1c] items-center">
        <div className="flex space-x-3 items-center lg:ml-20 lg:mr-20">
          <Menu size={25} />
          <p className="text-2xl">9anime</p>
          <label className="relative w-[600px] hidden lg:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
            <Input
              className="w-full bg-transparent placeholder:font-italitc rounded-lg py-2 pl-10 pr-4"
              placeholder="Search Anime"
              type="text"
            />
          </label>
        </div>

        <div className="flex space-x-5">
          <Search size={25} className="lg:hidden" />
        </div>
      </div>
      <div className="lg:ml-20 lg:mr-20 lg:mt-5 flex flex-col space-y-10">
        <Carousel />
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col space-y-5 w-3/4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Recently Updated</p>
              <div className="flex items-center space-x-2 text-gray-400">
                <p>All</p>
                <p>Sub</p>
                <p>Dub</p>
                <p>Chinese</p>
                <p>Trending</p>
                <p>Random</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 1, 1].map((a) => (
                <AnimeCard />
              ))}
            </div>
          </div>
          <div className="w-1/4 ml-10">
            <p className="text-2xl font-bold">Top anime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
