// import 'core-js';
// import 'core-js/features/promise';

// package.jsonの依存性をインストールする
// npm install
// node_modulesフォルダに積み重なっていく
// npm install -g <packageName> するとシステム全体からアクセスできるようにインストールされる。

// 開発モードで実行する
// npm run build:dev
const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  // 例題ではchromeでは動く、safariでは動かない（になるはず）のだけれど
  // 現在はapi.clipboardが大体のブラウザでサポートされているのでどっちも動いてしまった
  const text = textParagraph.textContent;
  // サポート有無のシンプルな判定方法
  if(navigator.clipboard) {
    navigator.clipboard
    .writeText(text)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }else{
    alert(`お利用のブラウザーでは自動コピーできません。（${text}）`);
  }

  const promise = new Promise();
  console.log(promise);
});
// もしconstがサポートできないブラウザであればどうするのか？
// 関数ならpolyphilを使えばいいけれど
// Babelを使えばよい

// 再度のおさらい
// BabelはJSコードの最新文法を旧バージョンのJSコードにtranspileできる。
// Webpackはbundlerであり、いろんなファイルを１つのbundleファイルにまとめる。
// なので、これら二つは直接依存性はないけれど
// https://babeljs.io/docs/usage
// babel-loaderをwebpackに追加し一緒に使う場合が多いのだ

// babel-loader, @babel/core, @babel/cli, @babel/preset-envの４つをインストールすれば良い
// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// npm install -D babel-loader@8.0.6 : いつものバージョン互換性問題があるので指定インストール
// webpack.config.js / prod.js / package.json(browserslist)を編集する

// こうするとbabelで最新コードが使えるし
// polyphilで互換されない機能も使える。。はずだけれど, 例えばpromiseはbabelを使っても使えない
// polyphilは手動で対応しているものを探して追加する必要があった
// core-jsをインストールすることで解決できる（が、要らないものまで全部入る）
// npm install --save core-js
// * --save(--save-prod) dependenciesにパッケージを追加する。
//   今回のcore-jsは本番環境でも必要になるものだから--save
// * --save-dev devDependenciesにパッケージを追加する。開発だけに利用し配布には要らないツールを入れる
// npm run build:devするとちゃんと動くけどapp.jsの容量が4Mくらいになる。。
// promiseフォルダのみimportすると1.5Mくらい

// 回りくどいこどをせず自動化する：Babelにお任せする：webpack.config.jsからpresetsを更新
// Babelが要求する他のパッケージを追加(core-jsが扱わないpolyphilを提供するっぽい)
// npm install --save regenerator-runtime
// npm run build:dev