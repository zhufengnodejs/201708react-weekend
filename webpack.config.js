let path = require('path');
module.exports = {
  //入口文件
  entry:'./src/index.js',
  //输出
  output:{
    //指定输出的绝对路径
   path:path.resolve('build'),
    //指定输出的文件名
   filename:'bundle.js'
  },
  //配置模块的加载方法
  module:{
    //规则是一个数组
    rules:[
      {
        test:/\.jsx?$/,
        use:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test:/\.(jpg|png|gif|bmp)$/,
        use:'url-loader'
      }
    ]
  }
  
}