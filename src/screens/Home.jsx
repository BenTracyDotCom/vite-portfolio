import React from "react";
import Heading from "../features/heading";
import Plane from "../features/plane";
import Clouds from "../features/clouds";


export default function Home() {

  return (
    <>
       <header>
        <div className={`text flex flex-col justify-center w-full items-center`}>
          <Heading />
          <Plane />
          <Clouds />
        </div>

      </header>

      <div className="footer">
        <a href="#">

          <h1 id="moreFun">more fun stuff
            <i className="fa fa-arrow-right" aria-hidden="true"></i></h1>
        </a>
      </div>
    </>
  )

}