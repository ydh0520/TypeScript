var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//class decirator
function Dhello(constructFn) {
    constructFn.prototype.hello = function () {
        console.log("hello");
    };
}
//methodsDecorator
function editable(cnaBeEditable) {
    // tslint:disable-next-line: only-arrow-functions
    return function (target, propName, description) {
        description.writable = cnaBeEditable;
    };
}
var DecoratorPerson = /** @class */ (function () {
    function DecoratorPerson() {
        console.log("wow");
    }
    DecoratorPerson.prototype.methdosDecorator = function () {
    };
    __decorate([
        editable(true)
    ], DecoratorPerson.prototype, "methdosDecorator");
    DecoratorPerson = __decorate([
        Dhello
    ], DecoratorPerson);
    return DecoratorPerson;
}());
var p = new DecoratorPerson();
p.hello();
