const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error); // promiseはpendingもしくはfailedできる
    }, opts);
  })
  return promise;
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // promiseが作られた時に呼ばれる
    }, duration);
  });
  return promise;
};

// Callback関数はいいけど、Nestedしすぎるとすごく面倒くさい。。。
// のでPromiseがある
// 中の中の中の。。ではなく、次の次の次の。。にできる
function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      console.log(posData);
      return setTimer(2000);
    }
    // , error => { // 2つ目の引数に入れても良い
    //   console.log(error);
    // }
    )
    .catch(err => { // catch文も使える。追加した位置より以前にある流れで何かがあれば。。
      console.log(err); 
       // ただ真ん中に置くと、次のthenがずっと実行される。。
       // エラー時点で切りたければ最後におく
    }) // エラーが出た時、catchを処理して再度以降のチェーンを実行する
    .then(data => {
      console.log(data, positionData);
    });

  setTimer(1000).then(() => {
    console.log('Timer done!');
  });

  console.log('Getting posision...');
}

button.addEventListener('click', trackUserHandler);

// pending : promise running, then(X) catch(X) 保留というが実行中。。みたいな
// resolved: promise resolved, then() => run 実行完了、次のthen()へ行ける
// rejected: promise rejected, catch() => run 拒絶、全然ダメだったからcatch()へいく
// settled: all promise done, 全部終わったから解決済みになる(これ以上then()がないとき)
// finally: settledの後に必ず実行されるもの。catch(){}finally{}のよう