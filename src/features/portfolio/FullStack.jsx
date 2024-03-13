import React from "react";
import PortfolioTile from "./PortfolioTile";
import { HashLink as Link } from "react-router-hash-link";

export default function FullStack({ setPhoto }) {

  return (
    <div>
      <div className="text-white drop-shadow-lg font-bold text-2xl text-center mb-0">Full-Stack</div>
      <PortfolioTile
      title="Good Measure Carpentry"
      image="/GMC.png"
      full="/GMCfull.png"
      blurb="I built and deployed this responsive website for a client, and I continue to provide domain management support."
      setPhoto={setPhoto}
      />
      {/* TODO: add RC Parts Picker */}
    </div>
  )
}