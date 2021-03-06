const path = require('path');
const webpack = require('webpack');
const imageInlineSizeLimit = parseInt(
    process.env.IMAGE_INLINE_SIZE_LIMIT || '2000'
);
module.exports = {
    // devtool:"source-map",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: "production",
    externals: { // 重要！Minified React error #321 https://github.com/facebook/react/issues/16029
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 2,
                          modules: true
                        }
                    }
            
                 ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(jpg|jpeg|gif|svg|png|eot|ttf|woff|woff2)$/,
                loader: require.resolve('url-loader'),
                exclude:/node_modules/,
                options: {
                    esModule: false
                },
            },
            // {
            //     test: /\.svg$/,
            //     loader: require.resolve('raw-loader'),
            //     exclude:/node_modules/,
            //     options: {
            //         esModule: false
            //     }
            // }
        ]
    },
    // performance: {
    //     hints: "warning", // 枚举
    //     hints: "error", // 性能提示中抛出错误
    //     hints: false, // 关闭性能提示
    //     maxAssetSize: 200000, // 整数类型（以字节为单位）
    //     maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    //     assetFilter: function (assetFilename) {
    //         // 提供资源文件名的断言函数
    //         return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    //     }
    // },
    optimization:{
        usedExports:true,
        minimize:true
    }
}