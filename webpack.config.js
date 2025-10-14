// webpack.config.js
const path = require("path");

module.exports = {
	mode: "development", // 'production' for minifying, 'development' for readable code
	entry: "./src/index.js", // The main entry point of your app
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"), // Where the bundled file goes
	},
	devServer: {
		static: "./dist", // The folder to serve for the dev server
	},
};
