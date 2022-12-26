console.log("Hello typescript");
// static typing
//
const fname: string = "Tikaram ";
const laname: string = "Acharya";
const fullname: string = `${fname} ${laname}`;
console.log(fullname);

const isMale: boolean = true;
const haveLisence: string = "Yup";

// Typescript special types
// 1. any

// without any
let a = true;
// a = "hello"; // it will through an error coz we cannot re-initialize any value whith different type

// with any

let b: any = true;
b = "chalna paryo sarkar"; // no error

console.log(b);

//special types:  unknown
// unknown is a similar, but safer alternative to any.

let changeNumToString: unknown = 35;
changeNumToString = "Noice"; // no error

console.log(changeNumToString);

// interface
// Interface defines properties, methods, and events which are the member of the interface.
// Interface contains only the decleration of the members.
// It is responsibilitiy of the deriving class to define the member.

// syntax :

interface interface_name {
  // members i.e properties
}

interface Ifullname {
  fname: string;
  lname: string;
  age: number;
  email: string;
}

const introduction: Ifullname = {
  fname: "Narayan",
  lname: "Yadav",
  age: 22,
  email: "tikaramac19@gmail.com",
};

console.log(
  introduction.fname + introduction.lname,
  introduction.email,
  introduction.age
);

const employee: Ifullname = {
  fname: "Hari",
  lname: "shrestha",
  age: 33,
  email: "hari@gmail.com",
};

console.log(employee.fname, employee.lname, employee.age);

//  Typescript arrays

const nameList: string[] = [];
nameList.push("Tika");
nameList.push("Ural");
nameList.push("Anjal");
nameList.push("Parasar");

console.log(nameList);

// readonly - keyword
// The readonly keyword can prevent arrays from being changed.

const nochangeList: readonly string[] = ["Jack"];
    // nochangeList.push("something") i.e it wont works coz push() method doesnt exist in type readonly

