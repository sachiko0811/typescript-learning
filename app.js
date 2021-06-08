// function add(n1: number, n2: number) { // In this case, you can just use "number" parameters
//   const result = n1 + n2;
//   return result;
// }
var u1 = { name: 'Max', age: 30 };
// no alias version
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return console.log(checkAge > user.age);
}
greet(u1);
isOlder(u1, 25);
