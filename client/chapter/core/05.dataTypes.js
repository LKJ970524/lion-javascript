/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null; //! null은 알 수 없는 값을 나타낸다.
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let unknown;
console.log(typeof unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const hi = new String('hello'); // 문자 생성자

const double = "hello"; // 문자 리터럴 
const single = 'hello';
const backtick = `hello ${ 1 + 3}`;


// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(12323); //! 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용한다. 정수의 한계는 ±2*(53) 까지이다.

const integer = 123;
const floatingPointNumber = 10.45;


console.log(typeof number);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123); //! BigInt: 길이 제약 없이 정수를 나타낼 수 있다.

const bigInteger = 123n;


// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log( typeof (bool) );
//! 불린형: true, false를 나타낼 때 사용한다. 

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({})

const obj = {}

console.log(obj);

//! 객체형 : 복잡한 데이터 구조를 표현할 때 사용한다.


// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');

console.log(typeof unique);

//! 심볼형 : 객체의 고유 식별자를 만들 때 사용한다.

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log( typeof (1 + 2) );

// 언어 상, 오류

/*
! typeof x 또는 typeof(x) 형태로 사용한다.
! 피연산자의 자료형을 문자열 형태로 반환한다.
*/

// Object

const user = {
  name: 'tiger',
  age: 28,
  sayHi: function(){
    console.log('hello~');
  },
  
  alert1: function (){ // normal function

  },
  alert2 (){ // consise method

  },
  alert3:()=>{ // arrow function 

  }
}

/*
! null의 typeof 연산은 "object"인데, 이는 언어상 오류이다. null은 객체가 아니다.
*/



console.log( user.sayHi() );

// Array

// const newArray = new Array();

const arr = [10,100,1000,1,2,3];

const count = 0;

`li:nth-child(${ count + 1})`

console.log( arr[3] );


// function

const f = new fishBreadFrame();

function fishBreadFrame(재료){
  return 재료 + ` 맛 붕어빵`; //? 함수 실행시 리턴 값을 줘서 실행시켜야 한다.
}

const 팥붕어빵 = fishBreadFrame('팥');
const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 와사비붕어빵 = fishBreadFrame('와사비');

console.log(와사비붕어빵);




// this





// 템플릿 리터럴 사용

// const backtick = `hello`;
// const backtick = `hello ${ 1 + 3}`;


//! 문자 안에 변수를 받아야하는 경우가 생긴다면 `${ 수식 }` : 템플릿 리터럴(Template Literal) 을 hello 뒤에 붙혀줌