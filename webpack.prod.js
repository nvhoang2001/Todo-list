const path = require("path");
const commonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
	mode: "production",
	output: {
		filename: "main-[contenthash].js",
		path: path.resolve(__dirname, "asserts", "scripts"),
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/template.html",
				filename: "../../index.html",
				minify: {
					removeComments: true,
					collapseWhitespace: true,
				},
			}),
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "../styles/[name]-[contenthash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					MiniCssExtractPlugin.loader, // 3. Extract CSS into files
					"css-loader", // 2. Turn css into commonjs
					"sass-loader", // 1. Turn sass into css
				],
			},
		],
	},
});
