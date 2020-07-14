module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config }) {
    //配合VSCode的CSS Modules插件,配置"cssModules.camelCase": true
    config.module.rule('css').oneOf('modules').use('css-loader').merge({
      options: {
        localsConvention: 'camelCase'
      }
    })

    config.devServer.proxy({
      '/weapi': {
        target: 'https://music.163.com',
        changeOrigin: true
      }
    })
  }
};
