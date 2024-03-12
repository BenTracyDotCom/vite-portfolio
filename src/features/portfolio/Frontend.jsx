import React from "react";
import PortfolioTile from "./PortfolioTile";

export default function Frontend({ setPhoto }) {

  return (
    <div>
      <div className="text-white drop-shadow-lg font-bold text-2xl text-center mb-0">Frontend</div>
      <PortfolioTile 
      image="/RR.png" 
      title="Everglades" 
      blurb=""
      setPhoto={setPhoto}
      />
    </div>
  )
}