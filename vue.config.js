module.exports = {
  chainWebpack: (config) => {
    // 新增bpm类型图片配置
    const urlRule = config.module.rule('url-loader')
    urlRule.uses.clear()
    urlRule.rule('url-loader')
           .test(/\.(bmp)$/)
           .use('url-loader')
           .loader('url-loader')
           .end()
  },
  devServer: {
    proxy: {
      'api': {
        target: 'http://127.0.0.1:8022/',
        changeOrigin: true
      }
    }
  }
}