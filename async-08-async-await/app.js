const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// 早い者勝ち
Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log(data);
});
// loser function is not cancelled, just ignored

// async-awaitやthenを使用しても良いけれど、特定関数を前提条件におきたければ
Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData); // the data combined from Promise.all();
});

// 何が成功して何が失敗したか気になるのであれば
Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData); // the data combined from Promise.all();
});
// 成功有無と値を配列に返してくれる