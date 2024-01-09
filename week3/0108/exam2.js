let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고', '바나나'];
/*
let same = [];
let diff = [];

for (let fruit of fruits1) {
  fruits2.includes(fruit) ? same.push(fruit) : diff.push(fruit);
}
for (let fruit of fruits2) {
  same.includes(fruit) || diff.includes(fruit) ? null : diff.push(fruit);
}
*/

// 방법2
let same = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));
let diff2 = fruits2.filter((fruit) => !fruits1.includes(fruit));

console.log(same);
console.log(diff);
console.log(diff2);
