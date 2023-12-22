"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
}
console.log(combine(30, 26, 'as-number'));
console.log(combine('30', '26', 'as-number'));
console.log("Marina", 'Anna', 'as-string');
//# sourceMappingURL=union-aliases.js.map