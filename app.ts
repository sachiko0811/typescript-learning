let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // error

if(typeof userInput === 'string') {
  userName = userInput;
}

// never type

function generateError(message: string, code: number): never {  // no return value(:never), there's gonna be an error
  throw { message: message, errorCode: code }
}

const result = generateError('Error!', 500);
console.log(result);