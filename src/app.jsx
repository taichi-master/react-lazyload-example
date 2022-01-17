import React, { useState } from 'react'
import Component from './component.jsx'
import { logLoading } from './logLoading'

logLoading( 'app' )

import Loadable from 'react-loadable'
import Loading from './loading.jsx'

const LoadableComponent = Loadable( {
  loader: _ => import( './lazy.jsx' ),
  loading: Loading
} )

export function App () {

  const [ isShow, setIsShow ] = useState( false )

  function showMore ( e ) {
    setIsShow( isShow => !isShow )
  }

  return (
    <>
      <h1>React-Lazyload-Example</h1>
      <Component/>
      <button onClick={ showMore }>{ isShow ? `show less` : `show more` }</button>
      {
        isShow && <LoadableComponent/>
      }
    </>
  )
}
