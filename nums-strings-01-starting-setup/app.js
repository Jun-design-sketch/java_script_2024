// JSの全てのNumberはFloat, 64bit
// Javaはintがあるけど、Integerタイプがないらしい
const max = Number.MAX_SAFE_INTEGER;
const verify = Math.pow(2, 53)-1;
console.log(max);
console.log(max===verify);
// 表示はできるけど正確に演算できない
// 2^53-1以降の値は正確性を失う
// これはちゃんと出るけれど
let ineditable = Math.pow(2, 53);
console.log(ineditable);
ineditable += 2;
console.log(ineditable);
// 奇数
ineditable = Math.pow(2, 53);
console.log(ineditable); // 9007199254740992
ineditable += 3;
console.log(ineditable); // 9007199254740996
// 正確に扱うには。。
ineditable = BigInt(Math.pow(2,53));
ineditable += 2n;
console.log(ineditable);
ineditable++;
console.log(ineditable);
ineditable += 3n;
console.log(ineditable);
////////////////////////
console.log('----------------');
// 不正確性について: 10進数（人）と2進数（機械）の間のため
console.log(0.2+0.4); // 0.6000000000000001
console.log(0.2+0.4 === 0.6); // false
// 10進数では。。
console.log(1/3); // 0.3333333333333333
// 2進数では。。
console.log((1).toString(2));
console.log((5).toString(2));
console.log((1/5).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
console.log((0.2).toString(2));

console.log((0.2).toFixed(20));
// なので大体は定数に変える。。
console.log(20.2 * 100);
////////////////////////
console.log('----------------');
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1/0);
console.log(Number.isFinite(10));
console.log(Number.isFinite(1/0));
console.log(Math.PI); // sqrt,powなどJavaと似てるものも入ってる
function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
console.log(randomIntBetween(1,10));
////////////////////////
console.log('----------------');

