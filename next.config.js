module.exports = {
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