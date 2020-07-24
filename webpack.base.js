const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const fs = require('fs')
const getEntrys = (dir) => {
	const entrys = fs.readdirSync('./src/entrys');
	let obj = {};
	entrys.forEach(item => {
		let key = item.split('.')[0]
		obj[key] = `${dir}/${item}`
	})
	return obj
}
const initTemplate = (entryObj) => {
	let arr = []
	for (let key in entryObj) {
		arr.push(new HtmlWebpackPlugin({
			template: `./public/${key}.html`,
			filename: `${key}.html`,
			chunks: [key]
		}))
	}
	return arr;
}
module.exports = {
	entry: {
		...getEntrys('./src/entrys'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
	},
	module: {
		rules: [
			{
				test:/\.html$/,
				use:{
					loader:'ejs-loader?variable=data'
				}
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader'
				}
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: [".js", ".vue", ".json", ".css", '.scss'],
	},
	optimization: {
		splitChunks: {
			// minSize:10000,
			// maxSize:100000,
			cacheGroups: {
				vendor: {
					// name: "vendor",
					// filename:'[name].[chunkhash].js',
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 10 // 优先级
				},
				common: {
					// name: "common",
					test: /[\\/]src[\\/]/,
					minSize: 1024,
					chunks: "all",
					priority: 5
				}
			}
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		...initTemplate(getEntrys('./src/entrys'))
	]
}
