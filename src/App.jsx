import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clouds from './features/clouds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type="checkbox" name="name" id="darkModeSwitch" />

      <header>
        <div className="text">
          <div className="heading">
            <span className="line-1 uppercase-sans">Ben</span>
            <span className="line-2 uppercase-sans">Tracy</span>
            <span className="line-3 uppercase-sans">
              <div id="iconHolder2">
                <div id="toolBox">
                  <svg className="wrench" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 514.1 514.1" xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M203.3,129.1c0-7.7,2.6-15.4,2.6-25.6c0-66.6-64-115.2-128-99.8L116.3,42c20.5,20.5,20.5,51.2,0,71.7s-51.2,20.5-71.7,0
                  l-41-35.8c-20.5,74.2,48.6,145.9,125.4,122.9l184.3,184.3c-2.6,7.7-2.6,17.9-2.6,25.6c0,66.6,64,115.2,128,99.8l-38.4-38.4
                  c-20.5-20.5-20.5-51.2,0-71.7c20.5-20.5,51.2-20.5,71.7,0l38.4,38.4c17.9-66.6-33.3-130.6-99.8-130.6c-10.2,0-17.9,2.6-25.6,2.6
                  L203.3,129.1z"/>
                      </g>
                    </g>
                  </svg>
                  <svg className="screwDriver" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 514.1 514.1" xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M373.3,175.1l79.4-28.2l58.9-94.7c2.6-5.1,2.6-12.8,0-15.4L480.8,6.2c-5.1-5.1-12.8-5.1-17.9-2.6l-97.3,56.3l-30.7,81.9
                  L173.6,305.7c-17.9-5.1-35.8,0-48.6,12.8l-105,105c-20.5,20.5-23,51.2-5.1,71.7c20.5,23,53.8,23,74.2,2.6l107.5-107.5
                  c12.8-12.8,17.9-33.3,12.8-48.6L373.3,175.1z"/>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </span>

            <p className="subheading">
              <b><i>Aircraft mechanic turned web developer:</i></b> bringing precision, hard work, trouble-shooting, and a bit of fun to a corner of the internet near you.
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


          <div className="plane-container">
            <a href="#" target="_blank">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="1131.53px" height="379.304px" viewBox="0 0 1131.53 379.304" enableBackground="new 0 0 1131.53 379.304"
                xmlSpace="preserve" className="plane">
                <polygon fill="#D8D8D8" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  " />
                <polygon fill="#C4C4C3" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   " />
              </svg></a>
          </div>

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

export default App
