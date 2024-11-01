/* eslint-disable no-undef */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
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
    // ビルドする度に新しいファイル名にする
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  // devServer: {
  //   // root html file location
  //   contentBase: './'
  // }
  plugins:[
    new CleanPlugin.CleanWebpackPlugin()
  ]
};