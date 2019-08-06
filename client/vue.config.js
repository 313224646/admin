const path = require('path')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type))) // 全局引入样式表
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/stylus/main.styl')
      ]
    })
}

function resolve (dir) {
  return path.join(__dirname, dir)
}