import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function PortfolioTile({ title, blurb, image, full, setPhoto }) {

  full = full || image

  const handleClick = () => {
    setPhoto(full)
    document.getElementById('fullsize').showModal()
  }

  return (
    <div className="card card-compact 
    w-fit bg-base-100 shadow-xl my-5 mx-auto mb-16">
      <figure className="mx-0 overflow-y-hidden">
        <img src={image} alt={`${title} image`} className="max-h-96 object-fill object-top" onClick={handleClick} />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mt-0 mx-auto">{title}</h2>
        <div className="max-w-96 mx-auto font-bold text-center">{blurb}</div>
      </div>
    </div>
  )
}