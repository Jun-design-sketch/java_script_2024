const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // promiseが作られた時に呼ばれる
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  // タイマーが０でもGetting positionより後に実行される
  setTimeout(() => {
    console.log('Timer done!');
  }, 0); // minimum time, not guaranteed
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// Callback関数はいいけど、Nestedしすぎるとすごく面倒くさい。。。
// のでPromiseがある