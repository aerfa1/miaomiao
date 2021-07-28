module.exports = {
    devServer : {
        proxy : {
            '/ajax': {
                target: 'http://m.maoyan.com/',
                // Origin是Request中的请求源，changOrigin可以修改请求源来自target的域。
                // changeOrigin: true
              },
              '/dianying':{
                target:'http://m.maoyan.com/',
                // changeOrigin: true
              }
        }
    }
}