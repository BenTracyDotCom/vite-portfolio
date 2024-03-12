import React from "react";
import Heading from "../features/heading";
import Plane from "../features/plane";
import Clouds from "../features/clouds";
import Footer from "../features/footer";


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

      <Footer />

      {/* <div className="">
        <a href="#">

          <h1 id="moreFun" className="text-red-500">Portfolio
            <i className="fa fa-arrow-right ml-5"></i></h1>
        </a>
      </div> */}
    </>
  )

}