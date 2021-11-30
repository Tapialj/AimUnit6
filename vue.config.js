module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api': '/'}
      },
    },
  },
}