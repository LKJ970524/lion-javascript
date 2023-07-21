/* ------------------ */
/* Variables(변수와 상수)*/
/* ------------------ */

let admin, nickname;
nickname = "john";
admin = nickname;
console.log(admin); 


let ourPlanetName = "Earth";
let currentUserName = "KJ";

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;
// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부
let isPayment = false;
let hasClassName = true;

// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
const brand_prefix = 'NIKE';

// - 오늘의 운세
let fortuneOfToday;

// - 상품 정보
const productInformation = '';



/* variables ----------------------------------------------------------- */


/* constant variables -------------------------------------------------- */



// redux, recoil, ajax

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PADING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';







//todo 변수
/*
? '이름이 붙은 저장소'라고 불리운다.
? let 키워드를 사용해서 변수를 생성. (let 하나에 여러변수를 선언하는것도 가능하다. 대신 권장하는 방법은 아니니 상황에 맞게 쓰자)
! 주의사항: 가끔 var이라는 변수를 사용하는 사람이 있다 고의 동일하게 작동하나 옛날방식이니 알아서 잘 고쳐서 쓰자
? 변수 두 개를 선언하고, 한 변수의 데이터를 다른 변수에 복사할 수도 있다.
*/

//todo 상수(변수의 값이 절대 변하지 않음을 의미)
/*
? 변화하지 않는 상수를 선언할때는 let이 아닌 const를 쓴다.
*/

//todo 바람직한 변수명
/*
? 사람이 읽을수 있는 이름을 사용
? 줄임말이나 짧은이름은 피해라(a,b,c같은것)
*/

//todo 요약
/*
* var, let, const를 사용해 변수를 선언할 수 있습니다. 선언된 변수엔 데이터를 저장할 수 있죠.
* let – 모던한 변수 선언 키워드입니다.
* var – 오래된 변수 선언 키워드입니다. 잘 사용하지 않습니다.
* const – let과 비슷하지만, 변수의 값을 변경할 수 없습니다.
*/