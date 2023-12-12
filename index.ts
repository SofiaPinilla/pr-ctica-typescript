let id: number = 5;
let nombre: string = "Francesc";
let isPublished: boolean = true;
let x: any = "María";

//union
let z: string | number | boolean;
z = true;
console.log(nombre);

let ids: number[];
ids = [1, 2, 3, 4, 5];
let arr: any[] = [20, true, "Lu"];
let arr2: Array<string | number> = [6, "Vero"];

//tuplas
let person: [number, string, boolean] = [23, "Frances", true];

let students: [number, string][];

students = [
  [1, "Nico"],
  [2, "Álvaro"],
  [3, "Demis"],
];

//**Tipado objetos */

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Tito",
};
const user2: User = {
  id: 2,
  name: "Jaime",
};

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

// const user3: UserInterface = {
//   id: 3,
//   name: "Tifa",
//   age:"23"
// };

// user3.id =4
// user3.name ="otra cosa"

interface Cat {
  name: string;
  legs: number;
  isDogFriendly: boolean;
}

interface Breed extends Cat {
  breed: string;
}

const grace: Breed = {
  name: "Grace",
  legs: 4,
  isDogFriendly: true,
  breed: "Chucho",
};

function addNum(x: number, y: number): number {
  return x + y;
}

function showName(name: string): string {
  return name;
}

function test(name: string): void {
  console.log(name);
}

interface DogInterface {
  age: number;
  name: string;
  register(): string;
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

class Dog implements DogInterface {
  age: number;
  name: string;

  constructor(age: number, name: string) {
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
