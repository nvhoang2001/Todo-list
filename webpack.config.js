const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/scripts/main.js",
	output: {
		filename: "main.js",
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
};
