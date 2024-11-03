// IndexedDB
// DBを作るか既存のものに繋げる

const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');
let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

// DBが繋がった時実行：DBは生成済みであり、欲しいバージョンに合致する
dbRequest.onsuccess = function(event) {
  // DBオブジェクトを開き、トランザクションを始める・データを処理するなど
  db = event.target.result;
}
// DBが存在しないときもしくはDBのバージョンが上がるとき実行
dbRequest.onupgradeneeded = function(event) {
  // schemaを初期化または修正する時に使用する：新しいobjectStore生成、既存storeに新しいindex追加など
  db = event.target.result;
  // オブジェクトの保存所
  const objStore = db.createObjectStore('products', {keyPath: 'id'});
  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: 'p1',
      title: 'A First Product',
      price:12.99,
      tags:['Expensive', 'Accessarry']
    });
  }
};

dbRequest.onerror = function(event) {
  console.log('ERROR');
};

storeBtn.addEventListener('click', () => {
  // オブジェクト保存所にあるデータベースは、コードが実行される時初期化される
  if(!db){
    return;
  }
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: 'p2',
    title: 'A Second Product',
    price:99.99,
    tags:['Expensive', 'Accessarry']
  });
});

retrieveBtn.addEventListener('click', () => {
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productsStore.get('p2');
  request.onsuccess = function() {
    console.log(request.result);
  }
});
// IndexedDBをより活用できるAPIがあり：idb.js