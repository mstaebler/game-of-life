module.exports = {
    entry: "./app/main.js",
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
          }
        }
      ]
    },
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    }
};
