import React from "react";
import PortfolioTile from "./PortfolioTile";

export default function Backend({ setPhoto }) {

  return (
    <div>
      <div className="text-white drop-shadow-lg font-bold text-2xl text-center mb-0">Backend</div>
      <PortfolioTile
      title="Merchandise API"
      blurb="I built and deployed a REST API to an AWS micro-EC2 instance, serving millions of lines of data across multiple endpoints from an indexed noSQL database (which I also designed) using Docker images, then optimized the routes and implemented load balancing to serve 1000 requests per second with a 3ms average latency."
      image="/LoaderIO.png"
      setPhoto={setPhoto}
      />
    </div>
  )
}