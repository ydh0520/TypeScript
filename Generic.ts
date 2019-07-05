/*
any => Generic
any의 경우 typecheck가 동작하지 았으므로 generic이 더 선호 된다.
*/

/*기본 문법*/
function hello<T>(message: T): T {
    return message;
}

hello("string");
hello<string>("string");

/*
배열의 선언과정에서 generic을 경험했으며 generic에서도 배열을 사용가능하다.
*/
function hello2<T>(message: T[]): T {
    return message[0];
}

/*
generic class  T 에 extends나 impement를 사용하여 특정 조건을 만족하는 자료형만 받을 수 있다.
*/
class GPerson<T extends string|number> {
    private _name:T;

    constructor(name:T){
        this._name=name;
    }
}

new GPerson<string>("Mark");

/*
한 클래스 에서 두개의 generic을 사용할수 있다.
*/
class DGPerson<T, K> {
    private _name:T;
    private _age:K;

    constructor(name:T,age:K){
        this._name=name;
        this._age=age;
    }
}

new DGPerson<string,number>("Mark",123);