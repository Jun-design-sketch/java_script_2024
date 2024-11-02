// LocalStorage, SessionStorage, IndexedDB
// ブラウザ基盤だからSSOT(SingleSourceOfTrue)として扱ってはいけない
// 持続性を持たない：ストレージが足りなければブラウザかユーザーから消される
// localStorage
const userId = 'u123';
const user = {
  name: 'someName',
  age: 31,
  hobbies: ['tokuni', 'nashi']
};
const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  localStorage.setItem('uid', userId);
  // localStorage.setItem('user', user);  // [object Object]として保存されている
    // 実際 localStorage.setItem('user', user.toString());されているため
    // JSONは文字列なのでできる
  localStorage.setItem('user', JSON.stringify(user));
  // SessionStorageに入れるのなら
  // sessionStorage.setItem(...);
});

retrieveBtn.addEventListener('click', () => {
  const extractId = localStorage.getItem('uid');
  const extractUserInfo = JSON.parse(localStorage.getItem('user'));
  if(extractId) {
    console.log('Got the id - ' + extractId);
    console.log(extractUserInfo);
  } else {
    console.log('Could not find id.');
  }
});

// SessionStorage: タブが開いている限りリフレッシュしても残る。タブやブラウザを閉じれば消える
// LocalStorage: 消えない。ユーザーが手動で消すか、ブラウザが容量不足で消さない限り