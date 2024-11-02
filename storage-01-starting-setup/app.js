// IndexedDB
// DBを作るか既存のものに繋げる

const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);
dbRequest.onupgradeneeded = function(event) {
  const db = event.target.result;
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
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: 'p1',
    title: 'A First Product',
    price:12.99,
    tags:['Expensive', 'Accessarry']
  });
});

retrieveBtn.addEventListener('click', () => {

});