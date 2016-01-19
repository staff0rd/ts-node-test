/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/jsdom/jsdom" />
/// <reference path="vendor" />

import jsdom = require('jsdom');
global['document'] = jsdom.jsdom('<!doctype html><html><body></body></html>');

import phaser = require('phaser');
global['Phaser'] = phaser;

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
