import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Cloud from "./cloud";

export default function Clouds() {

  const { width } = useWindowDimensions()
  let containerWidth = `w-[${Math.floor(width) - 10}px]`
  const clouds = Array.from(Array(Math.floor(width / 40)).keys())

  return (
    <div className={`max-w-[300px] sm:max-w-[500px] h-min flex flex-row justify-center items-end overflow-hidden p-0 mx-auto`}>
      {clouds.map((cloud) => (
        <Cloud key={cloud}/>
      ))}
    </div>
  )
}