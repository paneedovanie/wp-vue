module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/wp-content/themes/vue/dist/'
  : '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost',
        changeOrigin: true
      }
    }
  }
}