import React, { useState } from 'react'
import './App.css'
import Clouds from './features/clouds'
import Heading from './features/heading'
import useWindowDimensions from './hooks/useWindowDimensions'
import Plane from './features/plane'

function App() {

  const { width } = useWindowDimensions()
  let containerWidth = `w-[${Math.floor(width) - 10}px]`

  return (
    <>
      {/* <input type="checkbox" name="name" id="darkModeSwitch" /> */}

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

export default App
