const path = require("path");
const glob = require("glob");

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
    };
  },
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        // using emit-file-loader just to shut up "Cannot find module",
        // it will make copy of image in component directory
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext]"
          }
        },
        // this will create image copy, that we will use,
        // output path - "/.next/static/longhash.png"
        // url - "/_next/static/longhash.png"
        {
          loader: "url-loader",
          options: {
            outputPath: "static/",
            publicPath: "/_next/",
            name: "[name].[ext]",
            limit: 1000
          }
        }
      ]
    });
    return config;
  }
};
