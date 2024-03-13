import React from "react";
import Heading from "../features/heading";
import Plane from "../features/plane";
import Clouds from "../features/clouds";
import Footer from "../features/footer";


export default function Home() {

  return (
    <div className="flex flex-col w-screen">
      <div>
        <div className="text flex flex-col justify-center w-full items-center">
          <Heading />
          <Plane />
          <Clouds />
        </div>
      </div>
      <Footer right={{ text: 'Portfolio', url: '/portfolio' }} />
    </div>
  )

}