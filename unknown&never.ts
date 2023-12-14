let userInput: unknown;
let userName: string;

userInput = 'Max';
if(typeof userInput === 'string') {
    userName = userInput;
}


function generateError( message: string, code: number):never { // return type is 'never', doesn't return anything - not undefined, nothing
    throw {message: message, errorCode: code};
}

const result = generateError('An error occured!', 500);
console.log(result)