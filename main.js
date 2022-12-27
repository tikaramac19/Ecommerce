console.log("Hello typescript");
// static typing
//
var fname = "Tikaram ";
var laname = "Acharya";
var fullname = fname + " " + laname;
console.log(fullname);
var isMale = true;
var haveLisence = "Yup";
// Typescript special types
// 1. any
// without any
var a = true;
// a = "hello"; // it will through an error coz we cannot re-initialize any value whith different type
// with any
var b = true;
b = "chalna paryo sarkar"; // no error
console.log(b);
//special types:  unknown
// unknown is a similar, but safer alternative to any.
var changeNumToString = 35;
changeNumToString = "Noice"; // no error
console.log(changeNumToString);
var introduction = {
    fname: "Narayan",
    lname: "Yadav",
    age: 22,
    email: "tikaramac19@gmail.com"
};
console.log(introduction.fname + introduction.lname, introduction.email, introduction.age);
var employee = {
    fname: "Hari",
    lname: "shrestha",
    age: 33,
    email: "hari@gmail.com"
};
console.log(employee.fname, employee.lname, employee.age);
//  Typescript arrays
var nameList = [];
nameList.push("Tika");
nameList.push("Ural");
nameList.push("Anjal");
nameList.push("Parasar");
console.log(nameList);
// readonly - keyword
// The readonly keyword can prevent arrays from being changed.
var nochangeList = ["Jack"];
// nochangeList.push("something") i.e it wont works coz push() method doesnt exist in type readonly
var user = {
    names: "hello",
    age: 33
};
// user.location
var random = Math.random() < 0.5 ? "a" : "b";
console.log(random);
// typescript functions
function greeting() {
    return 69;
}
// console.log(typeof(greeting));
// the : number , here specifies this function return number
// void return type
// - The type void can be used to indicate a function doesn't return  any value;
function greet() {
    console.log('this function doesnt return anything.');
}
// parameters
// - function parameters are typed with a similar syntax  as variable declerations
function addition(a, b) {
    return a + b;
}
console.log(addition(202, 555));
