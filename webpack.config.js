'use strict';

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseAppEntries = [
  './src/index.tsx',
];

const devAppEntries = [
  'webpack-hot-middleware/client?reload=true',
];

const appEntries = baseAppEntries
  .concat(process.env.NODE_ENV === 'development' ? devAppEntries : []);

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
  })
];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {

  entry: {
    app: appEntries,
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-logger'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: "/",
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.js']
  },

  plugins: plugins,

  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint'
    }],
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
      { test: /\.svg/, loader: 'url' },
      { test: /\.eot/, loader: 'url' },
      { test: /\.woff/, loader: 'url' },
      { test: /\.woff2/, loader: 'url' },
      { test: /\.ttf/, loader: 'url' },
    ]
  },

  ts: {
     // https://github.com/Microsoft/TypeScript/issues/5478
    ignoreDiagnostics: [2605, 2345]
  }
}
