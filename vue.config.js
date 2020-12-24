module.exports = {
    devServer: {
        // 代理：会在本地虚拟一个服务端接收你发送的请求，并代理你发送的请求，可以实现跨域
        // proxy: 'http://127.0.0.1:3000',//设置一个代理
        proxy: {
            // 设置多个代理
            '/stu': {
                target: 'http://127.0.0.1:3000',//目标地址
                ws: true,//是否代理websockets
                changeOrigin: true,//是否跨域
                // 重写路径，/stu仅仅是一个转发的标志，真正的路径没有/stu，在转发的时候重写请求路径，把/stu替换掉
                pathRewrite:{
                    "^/stu": '',
                }
            },
            '/douyu': {
                target: 'http://open.douyucdn.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    "^/douyu": '',
                }
            }
        }
    }
}