import React, { useState, Suspense } from 'react'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'
import Article from './article.jsx'
import Loading from './loading.jsx'
import { logLoading } from './logLoading'

logLoading( 'about' )

const LoadableComponent = loadable( _ => import( './lazy.jsx' ) )

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
        isShow && (
          <Suspense fallback={ <Loading/> }>
            <LoadableComponent/>
          </Suspense>
        )
      }
    </div>
  )
}