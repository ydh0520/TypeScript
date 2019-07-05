//class decirator
function Dhello(constructFn: Function){
    constructFn.prototype.hello=function(){
        console.log("hello");
    }
}

//methodsDecorator
function editable(cnaBeEditable: boolean){
    return function(target: any, propName: string, description: PropertyDescriptor) {
        description.writable = cnaBeEditable;
    }

}

//PropertyDecorator
function writable(cnaBeEditable: boolean){
    return function(target: any, propName: string): any{

        return {
            writable: cnaBeEditable,
        }
    } 
}

@Dhello
class DecoratorPerson{

    @writable(true)
    name: string = "Mark";

    constructor(){
        console.log("wow");
    }

    @editable(true)
    methdosDecorator(){
        console.log(name);
    }

}

const p = new DecoratorPerson();
(<any>p).hello();

p.methdosDecorator();