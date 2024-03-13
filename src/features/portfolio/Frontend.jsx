import React from "react";
import PortfolioTile from "./PortfolioTile";

export default function Frontend({ setPhoto }) {

  return (
    <div>
      <div className="text-white drop-shadow-lg font-bold text-2xl text-center mb-0">Frontend</div>
      <PortfolioTile 
      image="/RR.png" 
      title="Everglades" 
      blurb="Everglades is a front-end business app for online retail. It was designed with simplicity and visual appeal in mind. I designed the Ratings & Reviews module which included a dynamic overview and responsive review tiles."
      setPhoto={setPhoto}
      />
    </div>
  )
}