import React from "react";
import Frontend from "./Frontend";
import FullStack from "./FullStack";
import Backend from "./Backend";

export default function PortfolioWork({ setPhoto }) {

  return (
    <div className="flex flex-col items-center px-5">
      <div className="text text-5xl font-black text-center w-fit pt-10 pb-20">Work I'm More Or Less Proud Of</div>
      <FullStack setPhoto={setPhoto} />
      <Frontend setPhoto={setPhoto} />
      <Backend setPhoto={setPhoto} />
    </div>
  )
}