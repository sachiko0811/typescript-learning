function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, function (res) {
    console.log(res);
});
// let combineValues;  // this valuable is any type so you can store not only any but also others
// let combineValues: Function; // not enough
var combineValues;
combineValues = add; // store add function to combineValues(valuable)
console.log(combineValues(1, 1)); // run the add function through combineValues
printResult(add(5, 12));
