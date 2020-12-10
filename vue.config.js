// An highlighted block
const path = require('path');
module.exports = {
  // 基本路径
  publicPath: './',
  //输出文件名
  outputDir: process.env.outputDir,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: { 
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // requireModuleExtension: false
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
}
