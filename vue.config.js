module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target:"https://samuel0708.website/",
        pathRewrite:{'^/api':''},
        changeOrigin:true,
        ws:true
      }
    }
  },
  publicPath: '/yen'
    
  }