import React from "react";
import Frontend from "./Frontend";
import FullStack from "./FullStack";
import Backend from "./Backend";

export default function PortfolioWork({ setPhoto }) {

  return(
    <div>
      <FullStack setPhoto={setPhoto}/>
      <Frontend setPhoto={setPhoto}/>
      <Backend setPhoto={setPhoto}/>
    </div>
  )
}