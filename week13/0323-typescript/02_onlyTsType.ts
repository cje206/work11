// only typescript type

// Tuple
// 순서와 개수가 있는 배열
let drink: [string, number] = ['사이다', 1000];
drink[0] = '콜라';
drink.push('음료수'); // tuple 한계 - 값이 추가됨
console.log(drink);

// readonly: 요소의 타입 순서와 길이 고정
const drink2: readonly [string, number] = ['사이다', 1000];
// drink2.push('음료!'); // error

//////////////////////////////////////
// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log('Auth.admin : ', Auth.admin);
console.log('Cafe.latte : ', Cafe.latte);

// 값을 넣지 않으면 숫자형, 가장 위의 요소부터 0으로 할당
enum Cake {
  chocolate,
  vanilla,
  // 숫자형과 문자형 혼용은 가능하나 enum 사용 의도와는 맞지 않으므로 권장하지 않음
  strawberry = '딸기 케이크',
}

console.log('Cake.chocolate', Cake.chocolate);
console.log('Cake.strawberry', Cake.strawberry);

///////////////////////////////////////
// any
// 명시적으로
let val: any;
val = true;
val = 1;
val = 'str';
val = { name: 'codingon' };

// 암묵적으로
let val2;
val2 = false;
val2 = 'hi';

////////////////////////////////////////
// 사용자 정의 타입

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'codingon',
  isPassed: true,
  // addr: 'seoul', // error(Student에 없는 값)
};

const student2: Student = {
  name: 'codingon',
  isPassed: true,
};

// enum 사용
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

// interface 상속
interface BaseballClub extends Student {
  position: string;
  readonly height: number;
  backNumber?: number; //?: 있어도 되고 없어도 됨
  // score: Score;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 190,
  1: Score.A,
};
console.log(otani);

otani.position = '투수';
otani['isPassed'] = false;
// otani.height = 180; // error : read only 값 수정 불가
console.log(otani);

// 2. type
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.LG;

// 교차 타입: 두 개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발');
  },
  color: 'blue',
  price: 10000,
};

type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F',
};
