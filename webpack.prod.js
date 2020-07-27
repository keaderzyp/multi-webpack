const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack')
const fs = require('fs')
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');
module.exports = merge(config,{
	mode: 'production',
	output: {
		filename: '[name].[chunkhash].js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
						},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'assets/fonts/[name]-[hash].[ext]'
					}
				}]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'assets/imgs/[name]-[hash].[ext]'
					}
				}]
			}
		]
	},
	resolve: {
		alias: {
			'vue$':'vue/dist/vue.min.js'
		}
	},
	optimization:{
		minimize:true,
		minimizer:[
			new TerserPlugin({
        terserOptions:{
          compress: {
          	drop_console: true,//console
          	drop_debugger: false,
          	pure_funcs: ['console.log']//移除console
          }
        }
			})
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name]-[hash].css'
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, `public`),
				to: path.resolve(__dirname, `dist`),
			}]
		})
	]
})
