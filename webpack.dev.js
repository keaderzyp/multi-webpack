const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');
const path = require('path')
const fs = require('fs')
module.exports = merge(config,{
	mode:'development',
	devtool:'inline-source-map',
	output:{
		publicPath:'/'
	},
	devServer:{
		contentBase: [path.resolve(__dirname,'dist'),path.resolve(__dirname,'public')],
		port:8088,
		host:'0.0.0.0',
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader',
					'postcss-loader',
				]
			},
			{
				test:/\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|svg|otf)$/,
				use:[{
					loader:'file-loader',
					options:{
						name:'[name].[ext]'
					}
				}]
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/,
				use:[{
					loader:'file-loader',
					options:{
						name:'[name].[ext]'
					}
				}]
			}
		]
	}
})
