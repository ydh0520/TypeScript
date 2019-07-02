/*
기본 구성
*/

// tslint:disable-next-line: interface-name
interface Person {
    name: string;
    age: number;
}

const personMark: Person = {
    name: "Mark",
    age: 26,
};

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name}입니다.`);
}

/*
? option의 경우 사용할때 있어도 되고 없어도 되는 변수를 의미하게 된다.
indexable type > string과 number두가지만 사용가능하며
*/
interface PersonOption {
    name: string;
    // option
    age?: number;
    // indexable
    [index: number]: string;
}

const persionOption: PersonOption = {
    name: "Anne",
};

/*배열과 다르게 index값을 마음대로 설정가능하다.*/
persionOption[0] = "hi";
persionOption[100] = "hello";


/*
(코딩 스타일)인터페이스 인식을 편하게 하기 위해 I를 붙인다.
*/
interface IPerson {
    name: string;
    hello(): void;
}

class subCalss implements IPerson {
    name: string = null;
    constructor(name: string) {
        this.name=name;
    }
    hello():void {
        console.log(`안녕하세요 ${this.name}입니다`);
    }
}