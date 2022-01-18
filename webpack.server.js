const path = require( 'path' ),
      resolvePath = folder => path.resolve( __dirname, folder )

module.exports = {
  mode: 'development',

  target: 'node',

  externals: [
    'react',
    'react-dom',
    'react-loadable',
    'react-router',
    'react-router-dom'
  ],

  entry: {
    app: resolvePath( 'src/app.jsx' )
  },

  output: {
    path: resolvePath( 'server/libs' ),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
},

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
}