//1. Use strict
//added in ES 5
//use this for Vanlira JavaScript
"use strict";

//2. Variable
//let (added in ES6)

{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
//Block Scope 블럭 밖에서는 접근할 수 없다.
//global Scope는 항상 메모리에 탑재되어 있어 늘 접근 가능함.
console.log(name);

//var (DO NOT EVER USE THIS !‼️!!!!!)
//var hoisting (어디에 선언하든 항상 제일 위로 선언을 끌어주는 것)
//Block Scope가 없음.....

const num = 4;

//3.Constants
//값을 할당하면 변경되지 않는 속성
//보안성, 사람의 실수를 줄일 수 있음, thread safety

//4. Variable types
//short, int, long, float, double 등등 숫자 관련 타입이 많은 다른 언어에 비해
//javascript는 number 하나로 끝 ! 게다가 선언은 let 하나로만 가능 !
//typescript too

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
//DOM 요소를 다양한 계산에 써야할때 어떤 타입인지를 구분할 수 있음

const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
//숫자 뒤에 n을 붙임으로써 더 큰 범위의 숫자 구현 가능
//하지만 아직 모든 브라우저에서 지원x, 알아는 두자

//String
const brendan = "brendan";
const helloBob = `hi ${brendan}`;

//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value

const canRead = true;
const test = 3 > 1; //false

//null
let nothing = null;

//undifined
let x = undefined;
let xx;

//symbol
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false
//같은 문구여도 고유의 심볼이 생성됨
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
//.for 가 붙으면 같아짐
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//출력할때는 .description 사용하여 string 변환을 해주어야 함

//object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
//ellie.name ellie.age 로 접근

//5.Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //error !?

//그래서 --> typescript가 나오게 됨, BABEL...
