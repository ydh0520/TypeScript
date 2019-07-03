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
주의할 점
*/

interface indexableProblem{
    [index:string]:string;
    /*
    name: number; 인덱서블 타임이 String이므로 사용할수 없다.
    name이라는 변수가 indexalbe에해당하는 값인지 고유 값인지 구분할수 없으므로 불가능
    */
}




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

    hi():void{
        console.log(`안녕 ${this.name}임`)
    }
}

//inter에에는 hi를 가지고 있지 않다.
const personSub1: subCalss =new subCalss('Mark');
const personInter: IPerson =new subCalss('Mark');

//interface도 상속이 가능하다.
interface Korean extends Person{
    city: string;
}

const koreanPerson: Korean={
    name: '홍길동',
    age: 26,
    city: '서울'
};