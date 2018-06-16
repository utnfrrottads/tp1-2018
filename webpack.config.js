const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({ filename: './assets/css/app.css' });

const config = {

    // absolute path for project root
    context: path.resolve(__dirname, 'src'),

    entry: {
        // relative path declaration
        app: './js/index.js'
    },

    output: {
        // absolute path declaration
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: 'eslint-loader',
                    }
            ]
            },
            // html-loader
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            // sass-loader with sourceMap activated
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            // file-loader(for images)
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/media/'
                        }
                    }
                ]
            },
            // file-loader(for fonts)
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        // cleaning up only 'dist' folder
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
        // extract-text-webpack-plugin instance
        extractPlugin,
        //linter options in a different file
        new StyleLintPlugin()
    ],

    devServer: {
        // static files served from here
        contentBase: path.resolve(__dirname, "./dist/assets/media"),
        compress: true,
        // open app in localhost:3000
        port: 3000,
        stats: 'minimal',
        open: true
    },

    devtool: 'inline-source-map'

};

module.exports = config;
