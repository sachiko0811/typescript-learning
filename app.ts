function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // console.log(typeof n1);
  // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error("It's not correct!");
  // }
  const result = n1 + n2;
  if(showResult) {
    console.log(phrase + result);
    // console.log(phrase + n1 + n2);  // when the phrase is string, then the answer will be string(52.8)
  } else {
    return result;
  }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: ';

const res = add(num1, num2, printResult, resultPhrase);
// console.log(res);

// const num1 = "5";
// const num2 = 2.5;
// res = 52.5