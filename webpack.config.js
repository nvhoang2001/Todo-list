const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/scripts/main.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "asserts", "scripts"),
	},
	devtool: "inline-source-map",
};
