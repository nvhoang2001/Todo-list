const path = require("path");

module.exports = {
	entry: "./src/scripts/main.js",
	module: {
		rules: [
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
};
