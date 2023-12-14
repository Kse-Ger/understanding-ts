"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 17));
let combineValues;
combineValues = add;
//combineValues = printResult;
console.log(combineValues(5, 5));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map