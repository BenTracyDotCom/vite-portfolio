import React from "react";
import PortfolioTile from "./PortfolioTile";
import { HashLink as Link } from "react-router-hash-link";

export default function FullStack() {

  return (
    <div>
      <div>FullStack</div>
      <PortfolioTile
      title="Good Measure Carpentry"
      image="/GMC.png"
      link="https://www.goodmeasurecarpentry.com"
      blurb=""/>
    </div>
  )
}