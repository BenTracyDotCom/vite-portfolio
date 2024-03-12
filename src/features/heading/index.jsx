import React from "react";

export default function Heading() {

  return (
    <div className="text-8xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-around">
      <span className="font-light opacity-[0.8] uppercase">Ben</span>
      <span className="font-bold uppercase">Tracy</span>
    </div>

    <p className="text-white text-2xl sm:text-4xl my-4 font-light max-w-[450px] m-0">
      <b><i>Aircraft mechanic turned web developer:</i></b> bringing precision, hard work, troubleshooting, and a bit of fun to a corner of the internet near you.
    </p>

    <div className="button-container">
      <div className="middle">
        <a className="btn" href="https://github.com/bentracydotcom" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a className="btn" href="https://www.linkedin.com/in/bentracydotcom" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
  )
}