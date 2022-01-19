const path = require( 'path' ),
      resolvePath = folder => path.resolve( __dirname, folder )

      module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: {
    main: [
      resolvePath( 'src/main.jsx' )
    ]
  },

  output: {
    path: resolvePath( 'public' ),
    publicPath: '/js',
    filename: 'bundle.js'
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