import React from "react";

export default function Cloud() {
  const height = `${Math.ceil(Math.random() * 100)}px`
  const width = `${Math.ceil(Math.random() * 100) + 40}px`

  return (
    <div className="p-0">
      <div className="-mr-[50px] -mb-[40%] bg-white rounded-[50%]" style={{ height: height, width: width }}></div>
    </div>
  )
}