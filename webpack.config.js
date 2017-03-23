'use strict';

// Prod check/uglify on prodbuild from http://stackoverflow.com/questions/25956937/how-to-build-minified-and-uncompressed-bundle-with-webpack

const PROD = JSON.parse(process.env.PROD_ENV || '0');
const MIN = JSON.parse(process.env.MIN_ENV || '0');
const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: PROD ? './src/index.js' : './demo.js',
    output: {
    	path: path.join(__dirname,(PROD ? '/dist' : '/dev')),
    	filename: MIN ? 'spectre.min.js' : 'spectre.js'
    },
    module: {
    	loaders: [
    		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    	]
    },
    plugins: MIN ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
    ] : [ new DashboardPlugin() ]
}