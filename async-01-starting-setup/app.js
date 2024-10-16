const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}
// buttonがなければaddできないん
button.addEventListener('click', trackUserHandler);
// javaScriptは基本的にsingle thread
// で、asyncとawaitでこれが引っかかってくるらしい。。Nodejsでなんだかよくみるそれ
// bottleNeckがあればどうするんだという話になり、
let result=0;
for(let i=0; i<1000000000; i++){
  result+=i;
};
console.log(result);
// click eventは計算が終わるまで実行されない
// JSもスレッド実行が欲しくなり。。
// setTimeout(someHandler, 3000)
// すると、stackに溜まる順次実行のコードでsetTimeout()はBrowser(API)に渡されStackからいなくなる
// stackに溜まるsetTimeout()以降の関数は順次実行される

// 時間になった時もJSのStackに何かがあれば、
// setTimeout()の中身（callback関数、someHandler）がMessage Queueに送られる。
// こうやってMessageQueueには暇な時やらねばならない仕事が溜まる。。
// そしてJSのStackが暇な時Event Loopにより次々とStackに復帰してくれる -> setTimeout()の場合は時間がトリガーではある
// 多重接続時の処理もQueueを使用するように非同期処理は大体似ている気がする

// EventLoop: 非同期処理を使用するCallback関数の処理を手伝う -> someHandlerを

// こうなっていても
function trackUserHandler() {
  console.log('Clicked');
}
button.addEventListener('click', trackUserHandler); // これは呼び出されるまで待たされる

let newResult = 0;
for(let i=0; i<10000000; i++) {
  newResult += i; // JSはもうここに入っているから
}
console.log(newResult); // これが終わるまで clickしてもeventListenerは動作しない