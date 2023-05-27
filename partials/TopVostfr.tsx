"use client";
import React from "react";
import AnimeCardSecondary from "@/components/AnimeCardSecondary";

function TopVostfr() {
  return (
    <div className="flex flex-col space-y-5">
      {[1, 2, 3, 4, 5, 6, 7].map((a) => (
        <AnimeCardSecondary />
      ))}
    </div>
  );
}

export default TopVostfr;
