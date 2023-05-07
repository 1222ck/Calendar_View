const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false // ESLint true: 컴포넌트 이름이 반드시 합성어
  , devServer: {
    proxy: 'http://localhost:8080'
  }
});