const path = require( 'path' ),
      resolvePath = folder => path.resolve( __dirname, folder )

const getConfig = ( target ) => ( {
  mode: 'development',

  devtool: 'inline-source-map',

  target,

  entry: resolvePath( target === 'web' ? 'src/main.jsx' : 'src/app.jsx' ),

  output: {
    path: resolvePath( target === 'web' ? 'public' : 'server/libs' ),
    publicPath: target === 'web' ? '/js' : undefined,
    filename: target === 'web' ? 'bundle.js' : '[name].js',
    libraryTarget: target === 'web' ? undefined : 'commonjs2'
  },

  externals: target === 'web' ? undefined : [
    'react',
    'react-dom',
    '@loadable/component',
    'react-router',
    'react-router-dom'
  ],

  devServer: {
    static: resolvePath( 'public' ),
    port: 3000,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [ /node_modules/ ],
        use: [
          {
            loader: require.resolve( 'babel-loader' ),
            options: {
              plugins: []
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
  ]
} )

module.exports = [ getConfig( 'web' ), getConfig( 'node' ) ]