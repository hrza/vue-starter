var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var outputDir = __dirname + '/build';

module.exports = {
    context: __dirname + '/src',
    entry: __dirname + '/src/app.js',
    resolve: {
        modulesDirectories: ['node_modules', 'vendor', 'src'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: outputDir,
        publicPath: '/build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
          {
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?name=font/[name]_[hash:6].[ext]&limit=10000&mimetype=application/font-woff"
          },
          {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?name=font/[name]_[hash:6].[ext]&limit=10000&mimetype=application/font-woff"
          },
          {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?name=font/[name]_[hash:6].[ext]&limit=10000&mimetype=application/octet-stream"
          },
          {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file?name=font/[name]_[hash:6].[ext]'
          },
          {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?name=font/[name]_[hash:6].[ext]&limit=10000&minetype=image/svg+xml"
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
          },
          {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
          },
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
          },
          {
              test: /\.vue$/,
              loader: 'vue'
          },
          {
              test: /\.json$/,
              loader: 'json'
          },
          {
              test: /\.(png|jpg|jpeg|gif)/,
              loader: 'file?name=img/[name]_[hash:6].[ext]'
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.Hammer': 'hammerjs',
            Hammer: 'hammerjs'
        }),
        new webpack.optimize.DedupePlugin()
    ]
};
