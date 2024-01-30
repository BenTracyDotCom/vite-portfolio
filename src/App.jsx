import React, { useState, useEffect } from 'react'
import './App.css'
import useWindowDimensions from './hooks/useWindowDimensions'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './screens/Home';
import ErrorPage from './screens/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
])

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
      //document.getElementById('themetoggle').checked = false
    }
  }, [])

  const { width } = useWindowDimensions()
  let containerWidth = `w-[${Math.floor(width) - 10}px]`

  return (
    <RouterProvider router={router} />
  )
}

export default App
