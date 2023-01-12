const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'http://localhost:8080/',
  outputDir: '../../backend/djano-heart-charity/static/dist',
  indexPath: '../../backend/django-heart-charity/templates/index.html',
})
