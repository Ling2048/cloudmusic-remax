module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config }) {
    // https://github.com/neutrinojs/webpack-chain
    // node_modules\@remax\cli\lib\build\web.js
    config.devServer.proxy({
      '/weapi': {
        target: 'https://music.163.com',
        changeOrigin: true
        // pathRewrite: { "^/api": "" } // 匹配 api 将 api 替换为 空
      },
      '/test': {
        target: 'https://www.baidu.com',
      }
    });
  }
};
