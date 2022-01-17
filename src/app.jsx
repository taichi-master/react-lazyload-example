import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './loading.jsx'
import Home from './home.jsx'
// import About from './about.jsx'
import { logLoading } from './logLoading'

logLoading( 'app' )

const About = Loadable( {
  loader: _ => import( './about.jsx' ),
  loading: Loading
} )

export function App () {
  return (
    <>
      <h1>React-Lazyload-Example</h1>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </main>
    </>
  )
}
