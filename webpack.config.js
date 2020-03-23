var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');
module.exports = {
    mode: 'development',
    entry: APP_DIR + '/js/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|json)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:  ['url-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: APP_DIR+ '/index.html',
        filename: BUILD_DIR+"/index.html",
        favicon: APP_DIR + "/images/favicon.ico"
    })],
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}