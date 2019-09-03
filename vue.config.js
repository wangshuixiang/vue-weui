module.exports = {
    publicPath: '',
    lintOnSave: false,
    devServer: {
        port: 8090,         // 端口号
        host: '0.0.0.0',
        https: false,       // https:{type:Boolean}
        open: true,         //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/r/': {
                target: 'http://deploy.hzyudaokeji.com',
                ws: true,
                pathRewrite: {'^/r/': '/'},
                changeOrigin: true
            }
        },
    },
}
