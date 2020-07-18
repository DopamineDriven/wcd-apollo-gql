const gql = {
	webpack(config, options) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }]
		});

		config.module.rules.push({
			test: /\.graphqls$/,
			exclude: /node_modules/,
			use: ["graphql-tag/loader", "graphql-let/schema/loader"]
		});

		return config;
	}
};

const compose = plugins => ({
	webpack(config, options) {
		return plugins.reduce((config, plugin) => {
			if (plugin instanceof Array) {
				const [_plugin, ...args] = plugin;
				plugin = _plugin(...args);
			}
			if (plugin instanceof Function) {
				plugin = plugin();
			}
			if (plugin && plugin.webpack instanceof Function) {
				return plugin.webpack(config, options);
			}
			return config;
		}, config);
	},

	webpackDevMiddleware(config) {
		return plugins.reduce((config, plugin) => {
			if (plugin instanceof Array) {
				const [_plugin, ...args] = plugin;
				plugin = _plugin(...args);
			}
			if (plugin instanceof Function) {
				plugin = plugin();
			}
			if (plugin && plugin.webpackDevMiddleware instanceof Function) {
				return plugin.webpackDevMiddleware(config);
			}
			return config;
		}, config);
	}
});

const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = compose([
	[
		withBundleAnalyzer,
		{
			enabled: process.env.ANALYZE === "true"
		}
	],
	gql
]);

// const withPlugins = require("next-compose-plugins");
// const withBundleAnalyzer = require("@next/bundle-analyzer");

// const nextConfig = {
// 	analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
// 	analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
// 	bundleAnalyzerConfig: {
// 		server: {
// 			analyzerMode: "static",
// 			reportFilename: "../bundles/server.html"
// 		},
// 		browser: {
// 			analyzerMode: "static",
// 			reportFilename: "../bundles/client.html"
// 		}
// 	},
// 	publicRuntimeConfig: {
// 		NODE_ENV: process.env.NODE_ENV,
// 		DB_USER: process.env.DB_USER,
// 		DB_PASSWORD: process.env.DB_PASSWORD,
// 		DB_CLUSTER: process.env.DB_CLUSTER
// 	}
// };

// module.exports = {
// 	pageExtensions: [
// 		"json",
// 		"jsx",
// 		"js",
// 		"ts",
// 		"tsx",
// 		"cjs",
// 		"graphql",
// 		"graphqls"
// 	]
// };

// module.exports = withPlugins(
// 	[
// 		[
// 			withBundleAnalyzer({
// 				enabled: process.env.ANALYZE === "true"
// 			})
// 		]
// 	],
// 	nextConfig,
// 	withConfig
// );

// const compose = (plugins) => ({
//   webpack(config, options) {
//     return plugins.reduce((config, plugin) => {
//       if (plugin instanceof Array) {
//         const [_plugin, ...args] = plugin
//         plugin = _plugin(...args)
//       }
//       if (plugin instanceof Function) {
//         plugin = plugin()
//       }
//       if (plugin && plugin.webpack instanceof Function) {
//         return plugin.webpack(config, options)
//       }
//       return config
//     }, config)
//   },

//   webpackDevMiddleware(config) {
//     return plugins.reduce((config, plugin) => {
//       if (plugin instanceof Array) {
//         const [_plugin, ...args] = plugin
//         plugin = _plugin(...args)
//       }
//       if (plugin instanceof Function) {
//         plugin = plugin()
//       }
//       if (plugin && plugin.webpackDevMiddleware instanceof Function) {
//         return plugin.webpackDevMiddleware(config)
//       }
//       return config
//     }, config)
//   },
// })

// const withBundleAnalyzer = require('@next/bundle-analyzer')

// module.exports = compose([
//   [
//     withBundleAnalyzer,
//     {
//       enabled: process.env.ANALYZE === 'true',
//     },
//   ],
// ])
