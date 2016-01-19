/// <reference path="node_modules/phaser/typescript/phaser.d.ts" />
//import Phaser = require('phaser')

export class MyClass {
    d: Phaser.Sprite;
    constructor() {
        this.d = new Phaser.Sprite(new Phaser.Game, 10, 10);
    }
    win() : boolean {
        return true;
    }
}