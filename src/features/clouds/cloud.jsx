import React from "react";

export default function Cloud(
  //{ h, w }
) {
  const height = `${Math.ceil(Math.random() * 100) + 40}px`
  const width = `${Math.ceil(Math.random() * 100) + 40}px`
  const r1 = '60'
  //Math.ceil(Math.random() * 100)
  const r2 = Math.random() * 100
  const r3 = Math.random() * 100
  const r4 = Math.random() * 100
  const rounded = `[50%/${r1}%_60%_40%_40%]`

  return (

    <div className="p-0 my-auto">
      <div className="-mr-[50px] -mb-[140%] bg-white rounded-[50%]" style={{ height: height, width: width }}></div>
    </div>
  )
}