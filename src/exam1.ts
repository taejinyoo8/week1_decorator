// 코드 실행법
// npm install --save-dev lite-server

// exam.ts 컴파일
// tsc --project tsconfig.json

// npm start

function Logger(logString: string) {
  console.log(logString);
  return function (constructor: any) {
    console.log("LOGGING");
    console.log(constructor);
    return constructor;
  };
}

function WithTemplate(template: string, hookId: string) {
  // 여기에 코딩하세요.
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const person = new constructor();
    const hookEl = document.createElement(template);
    const p = document.getElementById(hookId);
    hookEl.innerHTML = person.name;
    p?.appendChild(hookEl);
    return constructor;
  };
}
@Logger("LOGGER FACTORY")
@WithTemplate("h1", "app")
class Person {
  name = "mk";

  constructor() {
    console.log("Creating person object...");
  }
}
