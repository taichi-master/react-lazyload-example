import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Article from './article.jsx'
import Loadable from 'react-loadable'
import Loading from './loading.jsx'
import { logLoading } from './logLoading'

logLoading( 'home' )

const LoadableComponent = Loadable( {
  loader: _ => import( './lazy.jsx' ),
  loading: Loading
} )

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