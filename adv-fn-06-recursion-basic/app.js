function powerOf(x, n) {
  let result = 1;
  for(let i=0; i<n; i++) {
    result *= x;
  }
  return result;
}

console.log(powerOf(2,3)); // 2*2*2

// 書いてみたが
let count = 0;
let result = 1;
function testRecursionPowerOf(x, n, count) {
  if(count===n) return result;
  result *= x;
  count++;
  return testRecursionPowerOf(x, n, count);
}

console.log(testRecursionPowerOf(2,3,0)); // 2*2*2

// countを関数外部に宣言しているのがよろしくないので、引数に入れてみる
function testRecursionPowerOfTwo(x, n, count, init=1) {
  if(n === 0) return 1;
  if(count === n) return init;
  init *= x;
  count++;
  return testRecursionPowerOfTwo(x, n, count, init);
}
console.log(testRecursionPowerOfTwo(2,3,0));

// お手本。。。
function powerOfAnswer(x, n) {
  if(n === 1) return x;
  return x * powerOfAnswer(x, n-1);
}
console.log(powerOfAnswer(2,3));
// 結果と実行回数を格納すると思って色々追加していたけれど
// 結果をreturn自体に入れていて、回数をnでカウントしていけばシンプルで分かりやすくなる

// 三項演算子で更に簡潔
function shorterPowerOf(x, n) {
  return n === 1 ? x : x * shorterPowerOf(x, n-1);
}
console.log(shorterPowerOf(2,3));

console.log('--------');

// 再帰関数は短く書ける（？）が、他にも良さがある
// こういう仕組みのデータがあるとしてとき。。
// 例えばフォルダ構造をレンダリングするときもこんな感じになる
const myself = {
  name: 'A',
  friends: [
    {
      name: 'B',
      friends: [
        {
          name: 'C',
          friends: [
            {
              name: 'E'
            },
            {
              name: 'F'
            }
          ]
        }
      ]
    },
    {
      name: 'D'
    }
  ]
};
// 普通のforループ
function printFriendsName(person) {
  const collectNames = [];
  for(const friend of person.friends) {
    collectNames.push(friend.name);
  }
  return collectNames;
}
console.log(printFriendsName(myself));
// 再帰
function printFriendsNameRecursive(person) {
  const collectNames = [];
  if(!person.friends) return [];   // if(falsy)

  for(const friend of person.friends) {
    collectNames.push(friend.name);
    collectNames.push(...printFriendsNameRecursive(friend)); // spread to individual element
  }

  return collectNames;
}
console.log(printFriendsNameRecursive(myself));