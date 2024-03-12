import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function PortfolioTile({ title, blurb, image, link }) {

  const Image = link ?
    <Link to={link} >
      <img src={image} alt={`${title} image`} className="w-full max-h-96 object-top"/>
    </Link>
    :
    <img src={image} alt={`${title} image`} className="w-full max-h-96 object-top" onClick={handleClick}/>

    const handleClick = (img) => {

    } 

  return (
    <div className="card card-compact w-5/6 2md:w-1/3 2lg:w-1/4 bg-base-100 shadow-xl my-5 mx-auto sm:px-2">
      <figure className="mx-0 overflow-y-hidden">
        {Image}
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mt-0 mx-auto">{title}</h2>
        <p>{blurb}</p>
      </div>
    </div>
  )
}