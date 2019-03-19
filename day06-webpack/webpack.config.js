const path = require('path')
//引入
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',//开发环境
    // entry: './src/main.js',//相对
    entry: {
        'main': './src/main.js',
        "index": './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),//绝对路径
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,//正则表示，用于匹配loader转义的文件
                // loader:"css-loader"
                use: ["style-loader", "css-loader"] //从右往左执行
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2000
                    }
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',//模板文件
            filename: 'index.html',
            title: '这是一个测试文件'
        })
    ]
}