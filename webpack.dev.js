const path = require("path");
const commonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
	mode: "development",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "asserts", "scripts"),
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					"style-loader", // 3. Insert styles into the DOM
					"css-loader", // 2. Turn css into commonjs
					"sass-loader", // 1. Turn sass into css
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			filename: "../../index.html",
		}),
	],
});
