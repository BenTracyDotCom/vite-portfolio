import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function PortfolioTile({ title, blurb, image, full, setPhoto }) {

  const handleClick = (img) => {
    
  }

  return (
    <div className="card card-compact w-5/6 2md:w-1/3 2lg:w-1/4 bg-base-100 shadow-xl my-5 mx-auto">
      <figure className="mx-0 overflow-y-hidden">
        <img src={image} alt={`${title} image`} className="w-full max-h-96 object-top" onClick={handleClick} />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mt-0 mx-auto">{title}</h2>
        <p>{blurb}</p>
      </div>
    </div>
  )
}