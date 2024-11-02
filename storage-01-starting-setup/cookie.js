// Cookies
// HTTPRequestに繋がっているし
// サーバサイド言語でもよく触ってた
// サーバと疎通するときに使用可能：fileProtocolはページが提供される実際環境をシミュレートしないため
// 以前と同じくserveする：npm install -g serveしserve
// クライアントサイドでは何をするのか

const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const usr = {name:'thisIsName', age:31};
  // overrideやremoveでなく追加する行動
  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(usr)}`;
});

retrieveBtn.addEventListener('click', () => {
  // 統合された一つのStringが得られてしまい、APIメソッドなし
  console.log(document.cookie);
  // なのでsplit()とか使えているが使い勝手悪い
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]);
  // 満了期間設定可能なのが長所：max-age or expires
  // document.cookie = `uid=${userId}; max-age=2`;
  // document.cookie = `uid=${userId}; expires=...`
});

// ApplicationタブのHttpOnly:サーバ側で接近できブラウザ側では触れないセキュリティメカニズム