/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
//! typeof는 반환에서 array를 반환할 수 없다


const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'

function nomalIsArray(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'

function nomalIsNull(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}



const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]


/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않음.
//! callback 함수는 화살표함수를 쓰는경우가 더 많다
// [10,100,1000,10000]
arr.forEach((item,index)=>{
  console.log(item,index);
})  // 하나의 배열을 사용하는 방법


people.forEach((item)=>{
  console.log(item.name);
})


const span = document.querySelectorAll('span');

// 이벤트 처리 할때 이방식이 좋은가? no
// 이벤트 위임하는 방식은 event delegation

span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    console.log(this,index);
  })

})





/* 원형 파괴 ----------------------------- */
//! 배열이 파괴된다
// push
// pop
// unshift
// shift
// reverse //! 뒤집어버리지만 배열을 파괴한다

// arr.reverse()
// console.log(arr);

// splice : 맥가이버 칼 //! 만능이지만 원형을 훼손한다
// arr.splice(1,0,5,13)
// console.log(arr);

//? 정교하게 쓰려면 compare function이 필요하다

//? 반환 값 < 0 : a가 b보다 앞에 있어야한다.
//? 반환 값 == 0 : a가 b의 순서를 바꾸지 않는다.
//? 반환 값 > 0 : b가 a보다 앞에 있어야한다.


// sort
arr.sort((a,b)=> {
  return a - b;
})

console.log(arr);


/* 새로운 배열 반환 ------------------------ */

const user = ['선범','규정','준석']

// concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript','css'];
console.log(newArray);


// slice
const slice = arr.slice(2,5);
console.log(slice);

// toSorted
const toSorted = arr.toSorted((a,b)=>{
  return b - a
});

console.log(toReversed);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);


// toSpliced
const toSpliced = arr.toSpliced(2,0,'javascript','css','react');

console.log(toSpliced);


// map //! 모르면 나만손해
//? map은 값을 '퉤!'하고 반환한다.
const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
})

// 피플 자료구조에서 나이만 모아놓은 배열이 필요하다. => 가공처리 나이 -1 내보내고싶다.

const newAge = people.map((item)=> {
  return item.age - 1;
})


job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
}) //? forEach는 값을 반환하지 않는다.


// function render(){
  
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

// console.log(job);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf //! 정순으로
console.log(arr.indexOf(10));


// lastIndexOf //! 역순으로
console.log(arr.lastIndexOf(10));

// includes //! 포함하고있냐
console.log(arr.includes(1000));


/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item)=>{
  return item.id > 1
})

console.log(find);

// findIndex //? 아이템을 반환하는게아니라 n번쨰 값을 반환하는 것이다.

const findIndex = people.findIndex((item)=>{
  return item.id === 3
})

console.log(findIndex);



/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환
const filter = people.filter((item)=>{
  return item.id > 2
})


console.log(filter);


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce //? 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age
},0)

// console.log(totalAge);

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');


document.body.insertAdjacentHTML('beforeend',template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 ㅇ윤진 예나 시연 진만 정아'

// split : 문자 => 배열
const stringToArray = str.split(' ');

console.log(stringToArray);
// join :  배열 => 문자
const arrayToString = str.split(' ');

console.log(arrayToString)