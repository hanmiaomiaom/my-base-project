module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    assetsDir: 'static',
    productionSourceMap: false,

    // css: {
    //     loaderOptions: {
    //         // 给 sass-loader 传递选项
    //         sass: {
    //             // scss 变量文件的位置
    //             data: '@import "src/config/variables.scss";'
    //         }
    //     }
    // },
    devServer: {
        host: '0.0.0.0'
    // proxy: {
    //     '/api/': {
    //         target: 'http://11.11.141.59:30002'
    //     }
    // }
    },

    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    //   './src/theme'
                ]
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
};
