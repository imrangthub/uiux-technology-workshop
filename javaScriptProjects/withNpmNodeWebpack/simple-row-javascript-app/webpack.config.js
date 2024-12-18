const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index.js',
    main: './src/main.js',
    post: './src/views/posts/posts.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/', // Ensure your public path is correct for deployment
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your index HTML file
      chunks: ['index'], // Include only the `index` bundle
      filename: 'index.html', // Output path inside the `build` directory
    }),
    new HtmlWebpackPlugin({
      template: './src/main.html', // Path to your main HTML file
      chunks: ['main'], // Include only the `main` bundle
      filename: 'src/main.html', // Relative output path
    }),
    new HtmlWebpackPlugin({
      template: './src/views/posts/posts.html', // Path to your posts HTML file
      chunks: ['post'], // Include only the `post` bundle
      filename: 'src/views/posts/posts.html', // Relative output path
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'), // Source folder
          to: 'src/assets/images', // Destination folder inside `build`
        },
      ],
    }),
  ],
  resolve: {
    modules: [
      'node_modules', // Search for modules in the `node_modules` directory
      path.resolve(__dirname, 'src'), // Search for modules in your `src` directory
    ],
  },
  optimization: {
    minimize: false, // Set to `true` for production
  },
  mode: 'production',
};
