import React, { useState, Suspense } from 'react'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'
import Article from './article.jsx'
import Loading from './loading.jsx'
import { logLoading } from './logLoading'

logLoading( 'home' )

const LoadableComponent = loadable( _ => import( './lazy.jsx' ), { fallback: <Loading/> } )

export default function Home () {
  const [ isShow, setIsShow ] = useState( false )

  function showMore ( e ) {
    setIsShow( isShow => !isShow )
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Article/>
      <button onClick={ showMore }>{ isShow ? `show less` : `show more` }</button>
      {
        isShow && <LoadableComponent/>
      }
    </div>
  )
}