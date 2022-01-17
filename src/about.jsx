import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Article from './article.jsx'
import Loading from './loading.jsx'
import Loadable from 'react-loadable'
import { logLoading } from './logLoading'

logLoading( 'about' )

const LoadableComponent = Loadable( {
  loader: _ => import( './lazy.jsx' ),
  loading: Loading
} )

export default function About () {
  const [ isShow, setIsShow ] = useState( false )

  function showMore ( e ) {
    setIsShow( isShow => !isShow )
  }

  return (
    <div className="about">
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Article />
      <button onClick={ showMore }>{ isShow ? `show less` : `show more` }</button>
      {
        isShow && <LoadableComponent/>
      }
    </div>
  )
}