const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.responseType = 'json';

    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET', 'https://jsonplaceholder.typicode.com/posts'
  );

  const listOfPosts = responseData;
  for(const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

fetchPosts();

// POSTする
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

createPost('DUMMY', 'A dummy post!');





// Callback復習。。。
// コールバック関数は、関数の引数で渡された関数。。
function fetchData(callback) { // argument: callback
  setTimeout(() => { // 非同期関数
    callback("コールバックしたよ"); // callbackのargument"コールバックしたよ"
  }, 1000);
}
fetchData((message) => {
  console.log(message);
});