import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app.jsx'
import { logLoading } from './logLoading'

logLoading( 'main' )

// NOTE: this file can't be hot reloaded.
ReactDOM.render(
  <App/>,
  document.getElementById( 'root' )
)