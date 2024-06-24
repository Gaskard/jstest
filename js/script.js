"use strict";

let soldier = {
    health: 100,
    armor: 50
}

let john = {
    health: 500
}

john.__proto__ = soldier;

console.log(john)