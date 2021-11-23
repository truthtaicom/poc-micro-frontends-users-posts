require("dotenv").config({path: __dirname + '/.env'});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

const APP_NAME = process.env.APP_NAME || 'container'
const PORT = process.env.PORT || 3000


const remotes = {
  'shared': 'shared',
  'appUser': 'appUser',
  'appPost': 'appPost',
}

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: PORT,
  },
  output: {
    path: path.join(__dirname,'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: APP_NAME,
      library: { type: 'var', name: APP_NAME },
      filename: 'remoteEntry.js',
      remotes,
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        'react-fela': {
          singleton: true,
          version: deps['fela']
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};