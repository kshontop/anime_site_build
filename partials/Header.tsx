import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Header = (props: {}) => {
  return (
    <div className="flex p-5 justify-between bg-front items-center">
      <div className="flex space-x-3 items-center lg:ml-20 lg:mr-20">
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
            className="w-full bg-transparent placeholder:font-italitc rounded-lg py-2 pl-10 pr-4 focus:outline-none border-2 focus:border-gray-400 border-gray-600"
            placeholder="Search Anime"
            type="text"
          />
        </label>
      </div>
      <div className="flex space-x-5">
        <Search size={25} className="lg:hidden" />
      </div>
    </div>
  );
};
