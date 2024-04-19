// 1번
const olimpic_newgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성계주',
  },
  true,
];
// olimpic_newgame[1] = false;

// 2번
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};
let heroGame_B: Game = {
  title: 'MARVEL 퓨쳐파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};

// 3번
function sum1(num1: number, num2: number) {
  console.log(num1 + num2);
}
sum1(5, 11);

// 4번
function sum2(...a: number[]): number {
  let sum = 0;
  a.forEach((el) => (sum += el));
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10));

// 5번
function arrElement<T>(arr: T[], index: number): T {
  return arr[index];
}
console.log(arrElement<string>(['1', '3', '4', '5', '6'], 3));

// 5번 선택
function arrElement2<T>(arr: T[], index: number): T | Boolean {
  if (arr.length <= index) {
    return false;
  }
  return arr[index];
}
console.log(arrElement2<number>([1, 3, 4, 5, 6], 7));
