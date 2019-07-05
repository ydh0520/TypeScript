// let의 경우 타입추론에의해 타입이 설정된다.
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

// array의 type은 string|number|boolean 의 union 타입으로 나온다.
const array = ["a", 1, false];

class Animal {
    name: string;
}

class Dog extends Animal {
    dog: string;
}

class Cat extends Animal {
    cat: string;
}

// array4의 결과 또한 Dog|Cat 의 형태로 나온다.
const array4 = [new Dog(), new Cat()];


function helloInference(message: string | number) {
    if (message === "world") {
        return "world";
    } else {
        return 0;
    }
}

// 타입 가드
function isDog(arg: any): arg is Dog {
    return arg.name !== undefined;
}

// 자동완성이 다르며 타입 체크가 가능해 진다.
function testType(obj: Dog|Cat ){
    if (isDog(obj)){
        obj.dog;
    }else{
        obj.cat
    }
}