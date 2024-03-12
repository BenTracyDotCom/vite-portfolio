import React from "react";
import PortfolioTile from "./PortfolioTile";

export default function Backend({ setPhoto }) {

  return (
    <div>
      <div className="text-white drop-shadow-lg font-bold text-2xl text-center mb-0">Backend</div>
      <PortfolioTile
      title="Merchandise API"
      blurb=""
      image="/LoaderIO.png"
      setPhoto={setPhoto}
      />
    </div>
  )
}