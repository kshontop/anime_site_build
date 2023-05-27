"use client";
import React from "react";
import AnimeCardSecondary from "@/components/AnimeCardSecondary";

export const TopVf = () => {
  return (
    <div className="flex flex-col space-y-5">
      {[1, 2, 3, 4, 5, 6, 7].map((a) => (
        <AnimeCardSecondary />
      ))}
    </div>
  );
};
