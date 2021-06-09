var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; // error
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('Error!', 500);
console.log(result);
