const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin } = require("webpack");

const path = require("path");

const isDev = process.env.BUILD_MODE === 'development';

module.exports={
    mode: 'development',
    entry:'./src/scripts/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: './[name].[contenthash].js'
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:"body",
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open:true,
        port: 9000,
    }
}