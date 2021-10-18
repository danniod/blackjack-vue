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
  }
}