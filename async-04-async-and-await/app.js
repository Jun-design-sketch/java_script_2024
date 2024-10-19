const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  })
  return promise;
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() { // add 'async' こうするとpromiseを自動で返却する
  // let posisionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  console.log(timerData, posData);
    // .then(posData => {
    //   positionData = posData;
    //   console.log(posData);
    //   return setTimer(2000);
    // })
    // .catch(err => {
    //   console.log(err);
    //   return 'something is wrong... so sad...';
    // })
    // .then(data => {
    //   console.log(data, positionData);
    // });

  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });

  // console.log('Getting posision...');
}

button.addEventListener('click', trackUserHandler);

// pending : promise running, then(X) catch(X) 保留というが実行中。。みたいな
// resolved: promise resolved, then() => run 実行完了、次のthen()へ行ける
// rejected: promise rejected, catch() => run 拒絶、全然ダメだったからcatch()へいく
// settled: all promise done, 全部終わったから解決済みになる(これ以上then()がないとき)
// finally: settledの後に必ず実行されるもの。catch(){}finally{}のよう