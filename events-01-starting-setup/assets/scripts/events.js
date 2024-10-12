const buttons = document.querySelectorAll('button');
// button.onclick = function() {

// };

// const onButtonClickHandler = () => {
//   alert('Button was clicked!');
// }

// const somethingElse = () => {
//   console.log('another function');
// }

// button.onclick = onButtonClickHandler;
// override
// button.onclick = somethingElse;

// 複数のイベントをセット・削除可能
// button.addEventListener();
// button.removeEventListener();

// // イベントと関数自体を指定し、Listenerを消す仕組み
// button.addEventListener('click', onButtonClickHandler);
// setTimeout(() => {
//   button.removeEventListener('click', onButtonClickHandler);
// }, 2000);
// // であるため、これは動作しない。
// button.addEventListener('click', () => {
//   console.log('Clicked');
// });
// setTimeout(() => {
//   button.removeEventListener('click', () => {
//     console.log('Clicked');
//   })
// }, 2000);
// // 同じく、これも。。bind()するときに新しい関数オブジェクトができる
// button.addEventListener('click', onButtonClickHandler.bind(this));
// setTimeout(() => {
//   button.removeEventListener('click', onButtonClickHandler.bind(this));
// }, 2000);

// なのでこうする
const onButtonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
}
const boundFn = onButtonClickHandler.bind(this);
// button.addEventListener('click', boundFn);
// setTimeout(() => {
//   button.removeEventListener('click', boundFn);
// }, 2000);


buttons.forEach(btn => {
  btn.addEventListener('mouseenter', onButtonClickHandler);
});

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

// 無限スクロール
let curElementNumber = 0;
function scrollHandler() {
  // 底までの距離測定
  const distanceToBottom = document.body.getBoundingClientRect().bottom;
  // クライアントの現在高さが上記＋150より少なくなれば
  if(distanceToBottom < document.documentElement.clientHeight + 150) {
    // 新しいdiv
    const newDataElement = document.createElement('div');
    curElementNumber++;
    // divにinnerHtml挿入
    newDataElement.innerHTML = `<p>Element ${curElementNumber} </p>`;
    // documentに追加
    document.body.append(newDataElement);
  }
}
// scrollHandlerをscroll動作に紐づける
window.addEventListener('scroll', scrollHandler);