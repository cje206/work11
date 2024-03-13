// HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);
// textContent 주로 많이 사용
text.textContent = 'hi';
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫 번째</b> 태그입니다.';
/**
 * textContent : 요소 안에 텍스트 가져오거나 수정
 * innerText : 요소 안에 텍스트를 가져오거나 수정
 * textContent vs innerText
 * - textContent : 공백 문자 그대로 반환, IE9 이전 버전 사용 불가
 * - innerText : 남는 공백 문자 제거. table, tbody, tr 등 테이블 요소 수정 불가
 * innerHTML : 입력된 문장열을 HTML 형식으로
 */

// classList
text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('title-big');
console.log(text.classList.contains('title-big'));

/**
 * add : 클래스 추가
 * remove : 클래스 제거
 * toggle : 클래스가 있으면 제거, 없으면 추가
 * contains : 해당 클래스가 있는지 boolean값 반환
 */

// setAttribute : html 요소 속성 추가
const link = document.getElementById('link');
console.log(link);
link.setAttribute('href', 'https://www.naver.com');

const img = document.getElementById('image');
img.setAttribute('src', 'https://ssl.pstatic.net/melona/libs/1477/1477971/c0cbe4c7c9be5a77a822_20240108150843073.jpg');
img.setAttribute('width', '200px');

const input = document.getElementById('input');
input.setAttribute('placeholder', '이름을 입력하세요.');

// 다른 노드에 접근하기
console.log(text.children);
