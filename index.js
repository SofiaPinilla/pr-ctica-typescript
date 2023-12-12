"use strict";
let id = 5;
let nombre = "Francesc";
let isPublished = true;
let x = "María";
//union
let z;
z = true;
console.log(nombre);
let ids;
ids = [1, 2, 3, 4, 5];
let arr = [20, true, "Lu"];
let arr2 = [6, "Vero"];
//tuplas
let person = [23, "Frances", true];
let students;
students = [
    [1, "Nico"],
    [2, "Álvaro"],
    [3, "Demis"],
];
const user = {
    id: 1,
    name: "Tito",
};
const user2 = {
    id: 2,
    name: "Jaime",
};
const grace = {
    name: "Grace",
    legs: 4,
    isDogFriendly: true,
    breed: "Chucho",
};
function addNum(x, y) {
    return x + y;
}
function showName(name) {
    return name;
}
function test(name) {
    console.log(name);
}
console.log(addNum(2, 3));
const dog1 = {
    age: 2,
    name: "Zenda",
};
const dog2 = {
    age: 2,
    name: "Toni",
};
class Dog {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const toni = new Dog(11, "Toni");
const zenda = new Dog(12, "Zenda");
const mira = new Dog(9, "Mira");
