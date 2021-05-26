const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/scripts/main.js",
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
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpg|gif)/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hase].[ext]",
						outputPath: "imgs",
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			filename: "../../index.html",
		}),
	],
};
