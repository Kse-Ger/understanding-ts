type Combinable = number | string;

function combine (n1: Combinable, n2: Combinable, resultConversion: string) { 
    let result;
    if ( typeof n1 === 'number' && typeof n2 === 'number'  || resultConversion ===  'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    /* if(resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString()
    } */
} 
console.log(combine(30,26, 'as-number'));
console.log(combine('30','26', 'as-number'));
console.log("Marina", 'Anna', 'as-string');