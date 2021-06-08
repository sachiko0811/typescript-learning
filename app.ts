// function add(n1: number, n2: number) { // In this case, you can just use "number" parameters
//   const result = n1 + n2;
//   return result;
// }

// Union type

// function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
//   let result;
//   if ((typeof input1 === 'number' && typeof input2 === 'number') || 
//   resultConversion === 'as-number' 
//   ) {
//     // result = input1 + input2;
//     result = +input1 + +input2; // convert to number
//   } else {
//     result = input1.toString() + " " + input2.toString();
//   }
//   return result;
//   // if (resultConversion === 'as-number') {
//   //   return +result; // or parseFloat(result)
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Eve', 'Yoko', 'as-text');
// console.log(combinedNames);

// alias(custom)

// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';


// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: 'as-number' | 'as-text',
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Eve', 'Yoko', 'as-text');
// console.log(combinedNames);

// alias (Obj)

type User = { name: string; age: number};
const u1:User = { name: 'Max', age: 30};


// no alias version
function greet(user: { name: string; age: number;}) {
  console.log(`Hi, I am ` + user.name);
}

function isOlder(user: { name: string; age: number}, checkAge: number) {
  return console.log(checkAge > user.age);
}

greet(u1);
isOlder(u1, 25);