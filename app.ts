function add(num1: number,num2: number): number {
  return num1 + num2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

addAndHandle(10, 20, (res) => {
  console.log(res);
});

// let combineValues;  // this valuable is any type so you can store not only any but also others
// let combineValues: Function; // not enough
let combineValues: (a: number, b:number) => number;

combineValues = add;  // store add function to combineValues(valuable)

console.log(combineValues(1, 1));  // run the add function through combineValues

printResult(add(5, 12));