import React, { useState } from "react";
import PortfolioWork from "../features/portfolio";
import Footer from "../features/footer";
import FullSizePhoto from "../features/portfolio/FullsizePhoto";

export default function Portfolio() {

  const [photo, setPhoto] = useState('')
  const [showPhoto, setShowPhoto] = useState(false)

  return (
    <div className="w-screen">
      <FullSizePhoto photo={photo} />
      <PortfolioWork setPhoto={setPhoto}/>
      <Footer left={{text: "Home", url:"/"}} right={{text: "Game", url:"/"}} />
    </div>
  )
}