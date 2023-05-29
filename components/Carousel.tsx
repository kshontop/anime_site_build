"use client";
import React, { useEffect, useState } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, buttonVariants } from "./ui/button";
import { Play } from "lucide-react";
import { ICarousel } from "@/@types/anime";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { idExtractor } from "@/lib/extractor";

function Carousel() {
  const [animes, setAnimes] = useState<ICarousel[]>([]);

  useEffect(() => {
    fetchAnimeData();
  }, []);

  async function fetchAnimeData() {
    const result = await fetch("/api/anime/carousel");
    setAnimes(await result.json());
  }

  return animes.length > 0 ? (
    <ReactCarousel
      autoPlay
      showThumbs={false}
      infiniteLoop
      dynamicHeight
      stopOnHover
    >
      {animes.map((anime, index: number) => (
        <CarouselSingle key={index} {...anime} />
      ))}
    </ReactCarousel>
  ) : (
    <Skeleton className="w-full h-[250px] sm:h-[350px] lg:h-[500px]" />
  );
}

function CarouselSingle({
  link,
  cover,
  title,
  description,
  poster,
  type,
  released,
}: ICarousel) {
  return (
    <div
      id={`slide${idExtractor(link)}`}
      className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px]"
    >
      {/* small devices */}
      <div className="w-full h-full lg:hidden">
        <img src={poster} className="w-full h-full object-cover" />
        <div className="p-5 absolute top-0 h-full w-full text-start bg-gradient-to-r from-black to-transparent flex items-end justify-start">
          <div className="w-1/2 flex-col space-y-2">
            <p className="text-xl font-extrabold">{title}</p>
            <p>
              {type} | {released}
            </p>
            <p className="line-clamp-2">{description}</p>
            <Button className="w-full sm:w-1/2">Play Now</Button>
          </div>
        </div>
      </div>
      {/*large device*/}
      <div className="w-full h-full lg:block">
        <div className="flex w-full h-full gap-8">
          <div className="flex flex-col space-y-5 w-1/3 h-full text-start justify-center">
            <p className="text-6xl font-bold line-clamp-2">{title}</p>
            <p>
              {type} | {released}
            </p>
            <p className="line-clamp-3 text-gray-400">{description}</p>
            <Link
              href={`/${idExtractor(link)}`}
              className={`${buttonVariants({ variant: "default" })} w-1/2`}
            >
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Link>
          </div>
          <div className="w-2/3 h-full">
            <img
              src={cover}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
