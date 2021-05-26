const path = require("path");
const commonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(commonConfig, {
	mode: "production",
	output: {
		filename: "main-[contenthash].js",
		path: path.resolve(__dirname, "asserts", "scripts"),
	},
	plugins: [new CleanWebpackPlugin()],
});
