const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// 非同期通信をサポートするJSオブジェクト。
const xhr = new XMLHttpRequest();
// 3番目引数で非同期指定ができる。AJAXとかでこうしているそう
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


// JSONってJavaScript Object Notation(JSオブジェクト表記法)だった？
// 確かに形は似ているけれど同じものではない
// 関数なんてJSONデータには入れられない

// 返却されるもののタイプを指定し、自動で分析できるようにしてくれる
xhr.responseType = 'json';

xhr.onload = function() {
  // console.log(xhr.response); // argumentではなく.responseで貰える
  
  // JSON
  // const listOfPosts = xhr.response;
  // listOfPosts.push([{}]); // JSONデータはJS配列ではない（似てるけど）のでこうはできない
  
  // JSONをJS Arrayにparse
  // const listOfPosts = JSON.parse(xhr.response);
  // console.log(listOfPosts);

  // もしくは、XMLHttpRequest()の機能 responseTypeを使えば
  const listOfPosts = xhr.response;
  console.log(listOfPosts);
  for(const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
};

// source4から非同期にしているから回答が返ってくる前に次のコードは実行されつつある
xhr.send();

// じゃあここでlistOfPostsはどうやって回す？
// まだ来ていないかもしれない。xhr.onload()内にしかがない
// source31~35に送る