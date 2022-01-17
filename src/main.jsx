import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app.jsx'
import { logLoading } from './logLoading'

logLoading( 'main' )

// NOTE: this file can't be hot reloaded.
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById( 'root' )
)