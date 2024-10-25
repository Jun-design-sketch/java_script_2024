/* eslint-disable no-undef */
const path = require('path');

// NodeJSに右側のオブジェクトを外にはみ出せる
// eslint-disable-next-line no-undef
module.exports = {
  // entryPointを指定すれば、そこから全ての依存性を確認する
  // inputフォルダ（bundling前）とoutputフォルダを分けないといけない
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts')
  }
};