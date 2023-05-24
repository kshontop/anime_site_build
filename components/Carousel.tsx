"use client";
import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

function Carousel() {
  return (
    <ReactCarousel
      autoPlay
      showThumbs={false}
      infiniteLoop
      dynamicHeight
      stopOnHover
    >
      {[1, 2, 3, 4].map((index: number) => (
        <CarouselSingle
          key={index}
          id={index}
          src={
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg"
          }
          title={"One Piece"}
          description={
            "The epic battle between a renowned hero and the powerful corpse god necromancer culminates in an unforgettable face-off. However, after the dust settles, something seems amiss. During their intense encounter's final moments, the corpse god resorts to a surprising strategy: the use of reincarnation magic! Subsequently, a boy named Polka Shinoyama is reborn in an unimaginable way, feeling strangely unfamiliar. Who would have thought that the ultimate fight between good and evil would result in such unforeseen consequences?"
          }
          episodeId={"111"}
        />
      ))}
    </ReactCarousel>
  );
}

type CarouselSingleProps = {
  id: number;
  src: string;
  title: string;
  description: string;
  episodeId: string;
};

function CarouselSingle({
  id,
  src,
  title,
  description,
  episodeId,
}: CarouselSingleProps) {
  return (
    <div
      id={`slide${id}`}
      className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px]"
    >
      {/* small devices */}
      <div className="w-full h-full lg:hidden">
        <img src={src} className="w-full h-full object-cover" />
        <div className="p-5 absolute top-0 h-full w-full text-start bg-gradient-to-r from-black to-transparent flex items-end justify-start">
          <div className="w-1/2 flex-col space-y-2">
            <p className="text-xl font-extrabold">{title}</p>
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
            <p className="line-clamp-3 text-gray-400">{description}</p>
            <Button className="w-1/2">
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Button>
          </div>
          <div className="w-2/3 h-full">
            <img src={src} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
