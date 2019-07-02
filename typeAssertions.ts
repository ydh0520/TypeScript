/*
형 변환과는 달리 컴파일러가 타입을 체크할때 사용된다
런타임 에러가 발생하는 원인이 되므로 정확한 시점에 사용한다.
*/


let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
let strLength3: number = someValue.length;
/* 
1과2두가지 모두 가능하며 코딩 스타일 문제
3의경우 만약 someValue가 string 이 이니라면 에러
*/