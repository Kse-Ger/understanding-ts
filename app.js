function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 17));
var combineValues;
combineValues = add;
console.log(combineValues(5, 5));
