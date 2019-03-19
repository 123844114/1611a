const path = require('path')
const webpack = require('webpack')
//引入
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',//开发环境
    // entry: './src/main.js',//相对
    entry: {
        'main': './src/main.js',
        "index": './src/index.js',
        "vendor":['vue','element-ui']
    },
    output: {
        path: path.resolve(__dirname, './dist'),//绝对路径
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,//正则表示，用于匹配loader转义的文件
                // loader:"css-loader"
                // use: ["style-loader", "css-loader"] //从右往左执行
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
            {
                test: /\.js$/,
                // exclude:'node_modules',//排除
                include:/src/,
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
    devServer:{
        port:9000,
        host:'localhost',
        open:true,
        hot:true,
        proxy:{
            '/api': {
                target: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', // 接口的域名
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/api': ''//以/api开头的接口
                }
            },
            '/login':{}
        }
    },
    resolve:{//配置附属项
        extensions:['.js','.css','.json'],//可以省略扩展名
        alias:{//配置路径别名
            "@css":'./css'  //路径是相对于入口文件main的
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',//模板文件
            filename: 'index.html',
            title: '这是一个测试文件'
        }),
        new ExtractTextPlugin({
            filename:'style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin(),
        new webpack.optimize.SplitChunksPlugin({name: 'vendor'}),
        new CleanWebpackPlugin()
    ]
}