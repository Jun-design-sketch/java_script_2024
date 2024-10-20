const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = function() {
      // resolve(xhr.response);
      // const listOfPosts = JSON.parse(xhr.response);
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      }else{
        reject(new Error('Something went wrong!'));
      }
    };

    // ERROR CONTROL
    xhr.onerror = function() { // エラー発生時トリガーされる
      // ただし、ネットワークエラー：要請を送られなかった・時間超過した場合動作
      // リクエストして404が返ってきたら、正常にリクエスト・レスポンスされたのだからトリガーされん。。
      // 正常レスポンスでないケースはonload側の編集で対応が可能(xhr.statusでresolve/rejectを分岐)
      reject(new Error('Failed to send request!'));
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/pos' // ts
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    postEl.querySelector('li').id = post.id;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

//DELETE
postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});