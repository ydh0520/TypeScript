/*
기본 사용

1.생성자가 없으면 디폴드 생성자가 불린다.

2.멤버 변수에 값을 대입하지 않으면 undefinded이다

3.접근제어자의 디폴트는 public 이다.
*/

class Person {
    name: string;
    age: number;

    // 생성자를 만들수 있으며 만들경우 기본생성자는 사용할수 없다.
    constructor(name: string) {
        this.name = name;
        this.age = 0;
    }
    printhello(): void {
        console.log("hello");
    }
}

/*
접근제어자 private
printe 변수앞에 _를 붙이는데 필수는 아니고 기존 문법들의 잔재임
protedcted의 경우 상속과 관련있으며 자바와 같은 방식이다.
자식의 생성자가 없을경우 부모의 생성자 사용한다.\
=> 자식의 디폴트 생성자 = 부모의 생성자.
*/

class privatePerson {
    protected extends: number;
    private _name: string;
    private _age: number;
}

/*
상속시 부모클래스의 생성자를 호출하여 사용한다. super()
*/
class Child extends Person {

}

/*
get,set 자바의 get~ set~과 달리 별도의 문법이 존재
static 또한 사용가능한다.
*/

class GetSetPerson {
    public static HEIGHT: numberb = 160;
    constructor(private _name: string, private _age: number) {
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

/*
abstract class
abstract가 사용되면 new 로 생성할후 없으며 상속받은 클래스는 모든 abstract에 대하여 구현을 해야한다.
readonly를 사용하면 get만 사용가능하다.
*/
abstract class APerson {
    protected _name: string = 'Mark';
    abstract setName(name: string): void;
}

class PPerson extends APerson {
    setName(name: string): void{
        this._name = name;
    }
}

const person3 = new PPerson();
