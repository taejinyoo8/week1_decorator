// 코드 실행법
// npm install --save-dev lite-server

// exam.ts 컴파일
// tsc --project tsconfig.json

// npm start

// 문제1,2 : Logger 와 WithTemplate Decorator 를 사용하여 answer1.png 와 같은 화면을 출력하세요.
// hint : Decorator 의 실행순서
// Class decorator 가 받는 인자
function Logger(logString: string) {
  // 여기에 코딩하세요.
}

//문제2
//hint1 : hookEl.innerHTML = template;
//hint2 : hookEl.querySelector('태그네임').textContent = 넣을값
//hint3 : Person class 의 name 을 사용하기 위해서는 const p = new constructor(); 를 사용하세요
// template은 h1 태그를 사용해주세요
function WithTemplate(template: string, hookId: string) {
  // 여기에 코딩하세요.
  return function (constructor: any) {
   // 여기에 코딩하세요.
  };
}

//Decorator 넣을자리1
//Decorator 넣을자리2
class Person {
  name = "tj";

  constructor() {
    console.log("Creating person object...");
  }
}
