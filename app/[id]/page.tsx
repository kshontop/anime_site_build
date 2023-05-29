import React from "react";

type Params = {
  params: {
    id: string;
  };
};

function Anime({ params }: Params) {
  return <div>{params.id}</div>;
}

export default Anime;
