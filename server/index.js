const express = require( 'express' ),
      ejs = require( 'ejs' ),
      app = express(),
      port = 3000

const webpack = require( 'webpack' ),
      webpackConfig = require( '../webpack.config.js' )

const compiler = webpack( webpackConfig )

const path = require( 'path' ),
      resolvePath = folder => path.resolve( __dirname, folder )

const React = require( 'react' ),
      ReactDOMServer = require( 'react-dom/server' ),
      { StaticRouter } = require( 'react-router-dom/server' ),
      App = require( resolvePath( 'libs/app.js' ) ).default

app.use( require( 'webpack-dev-middleware' )( compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
} ) )
app.get( '*', function ( req, res ) {
  const appHtml = ReactDOMServer.renderToString(
    React.createElement( StaticRouter, { location: req.url, context: {} },
      React.createElement( App )
    )
  )
  const str = ejs.renderFile( path.resolve( __dirname, '../public/index.html' ), { appHtml }, null, function( err, str ) {
    res.send( str )  
  } )
} )

app.listen( port, function () {
  console.log( `🚀 listening at  ${port}` )
} )