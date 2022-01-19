import React, { useState, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from './loading.jsx'
import Home from './home.jsx'
// import About from './about.jsx'
import { logLoading } from './logLoading'

logLoading( 'app' )

const About = loadable( _ => import( './about.jsx' ), { fallback: <Loading/> } )

export default function App () {
  return (
    <>
      <h1>React-Lazyload-Example</h1>
      <main>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
        </Routes>
      </main>
    </>
  )
}
