//let의 경우 타입추론에의해 타입이 설정된다.
let a: string = "let type";
let b = "let type";

/*
const의 경우 명시하지 않은 const변수에 대하여 리터럴 타입으로 설정한다.
*/

const c: string = "String 타입";
const d = "리터럴 타입";

/*
따라서 c=d의 문법의 경우 변수의 타입이 달라 불가능하다.
*/