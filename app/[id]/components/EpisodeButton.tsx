import React from "react";
import { PlayCircle } from "lucide-react";

type EpisodeButtonProps = {
  number: number;
  isCurrent: boolean;
  cb: (ep: number) => void;
};

function EpisodeButton({ number, isCurrent, cb }: EpisodeButtonProps) {
  return (
    <div
      className={`w-full bg-${isCurrent ? "primary" : "front"
        } p-2 rounded-lg flex justify-between pl-5 pr-5 cursor-pointer ${isCurrent ? "opacity-100" : "opacity-70"
        } hover:opacity-100`}
      onClick={() => cb(number)}
    >
      <p>Episode {number}</p>
      <PlayCircle />
    </div>
  );
}

export default EpisodeButton;
