/*
두개의 타입이 모두 가능한 것을 유니온 타입이라하며 
이러한 유니온타입 사용시 짧게 문법을 바꿔준다.
*/
let person: string | number =0;
person = "Mark";

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "Anna";

/*
튜플도 유니온과 마찬가지로 반복될경우 유용하게 쓰일 수 있다.
*/
let typleNotAlias: [string, number] = ["Mark", 35];

type PersonTuple = [string, number];

let typleAlias: PersonTuple = ["Mark", 35];


/*
인터페이스와의 차이점
extends 와 impement가 안된다.(권장되지 않음)
*/
