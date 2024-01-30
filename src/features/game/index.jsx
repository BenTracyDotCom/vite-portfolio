import React from "react";
import tree from "./tree.png";
import tanks from './tanks.png'

export default function Game() {

  return (
    <div className="border-2 border-red-300">
      {/* <img id="backgroundImage" src="forest.jpg" /> */}
      <div className="border-2 border-red-500">
        <img id="tankImage" src={tanks} className="border-2 border-red-500"/>
      </div>
        <img id="treeImage" src={tree}/>
      <script src="./script.js" />
      <canvas id="canvas1" className="w-128 h-128"></canvas>
    </div>
  )
}