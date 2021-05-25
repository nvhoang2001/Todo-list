const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/scripts/main.js",
	output: {
		filename: "main-[contenthash].js",
		path: path.resolve(__dirname, "asserts", "scripts"),
	},
	devtool: "inline-source-map",
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
};
