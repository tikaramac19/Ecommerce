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
