let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件
  entry:'./comment-redux/index.js',
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
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(jpg|png|gif|bmp|ttf|woff|woff2|eot|svg)$/,
        use:'url-loader'
      }
    ]
  },
  plugins: [
    //自动产出html的插件，先把js文件打包成一个bundle.js文件，然后插入index.html脚本，然后把脚本保存在build里
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ],
  //开发工具，实现打包后文件和源文件的映射,在报错的时候不是报bundle.js的行号，而是报源文件的文件名和行号，方便排查错误,还可以在源文件里打断点，进行调试
  devtool:'cheap-module-source-map'
}