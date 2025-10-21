// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"], // "When I import './validators', also check for '.ts' and '.js' files"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "I hate life",
			template: "./src/index.html",
		}),
	],
};
