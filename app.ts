// function add(n1: number, n2: number) { // In this case, you can just use "number" parameters
//   const result = n1 + n2;
//   return result;
// }

// Union type

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result;
  if ((typeof input1 === 'number' && typeof input2 === 'number') || 
  resultConversion === 'as-number' 
  ) {
    // result = input1 + input2;
    result = +input1 + +input2; // convert to number
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result; // or parseFloat(result)
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Eve', 'Yoko', 'as-text');
console.log(combinedNames);