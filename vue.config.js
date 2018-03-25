const path = require("path")

module.exports = {
	chainWebpack: config => {
		config.module
			.rule("vue")
			.use("vue-loader")
			.tap(options => {
				options.loaders.stylus = options.loaders.stylus.concat({
					loader: "stylus-resources-loader",
					options: {
						resources: path.resolve("./src/assets/_base.styl"),
					},
				})
				return options
			})
	},
}
