/* eslint-disable no-undef */
const path = require('path');
// npm run build
// NodeJSに右側のオブジェクトを外にはみ出せる
// eslint-disable-next-line no-undef
module.exports = {
  // entryPointを指定すれば、そこから全ての依存性を確認する
  // inputフォルダ（bundling前）とoutputフォルダを分けないといけない
  // 複数のページをbundle化したいのであればこうなる。。
  // entry : {
  // welcome: './src/welcome/welcome.js'
  // about: './src/about-page/about.js'
  // }
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map'
  // devServer: {
  //   // root html file location
  //   contentBase: './'
  // }
};