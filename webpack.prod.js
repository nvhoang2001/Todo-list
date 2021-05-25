const path = require("path");
const commonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
	mode: "production",
	output: {
		filename: "main-[contenthash].js",
		path: path.resolve(__dirname, "asserts", "scripts"),
		clean: true,
	},
});
