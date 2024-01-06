// 실습 4
// let age = prompt('나이를 입력해주세요.');

// if (age >= 20) {
//   console.log('성인')
// } else if (age >= 17) {
//   console.log('고등학생')
// } else if (age >= 14) {
//   console.log('중학생')
// } else if (age >= 8) {
//   console.log('초등학생')
// } else {
//   console.log('유아')
// }

// 실습 5
let age = Number(prompt('나이를 입력해주세요.'));
let gender = prompt('성별을 입력해주세요. (여자/남자)');

if (gender === '여자') {
  ageFunc(age,gender)
} else if (gender === '남자') {
  ageFunc(age,gender)
} else {
  if (age) {
    console.log(`성별이 틀렸습니다.`);
  } else {
    console.log(`성별과 나이가 모두 틀렸습니다.`);
  }
}

function ageFunc(age, gender) {
  if (age >= 20) {
    console.log(`성인 ${gender}`)
  } else if (age >= 17) {
    console.log(`고등학생 ${gender}`)
  } else if (age >= 14) {
    console.log(`중학생 ${gender}`)
  } else if (age >= 8) {
    console.log(`초등학생 ${gender}`)
  } else if (age >= 0) {
    console.log(`성인 ${gender}`)
  } else {
    console.log(`나이가 틀렸습니다.`)
  }
}
