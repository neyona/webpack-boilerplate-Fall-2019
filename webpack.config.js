const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
         test: /\.(gif|png|jpe?g|svg)$/i,
         use: [
           'file-loader',
         {
             loader: 'image-webpack-loader',
             options: {
                 mozjpeg: {
                     progressive: true,
                     quality: 65
                 },

                 optipng: {
                     enabled: false,
                 },
                 pngquant: {
                     quality: [0.65, 0.90],
                     speed: 4
                 },
                 gifsicle: {
                     interlaced: false,
                 },
                 webp: {
                     quality: 75
                 }
             }
         },
       ],
     }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
