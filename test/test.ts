/// <reference path="../typings/mocha/mocha.d.ts" />
import MyModule = require('../MyClass'); 
    
describe('MyClass', () => {   
    var subject : MyModule.MyClass;

    beforeEach(function () {
        subject = new MyModule.MyClass();
    });

    describe('#win', () => {
        it('should pass', () => {
            var result : boolean = subject.win();
            if (result !== true) {
                throw new Error('Expected true but was ' + result);
            }
        });
    });
});
