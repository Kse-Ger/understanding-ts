let usersName = 'Maximilian'; // global variable

//console.log(userName);

const button = document.querySelector('button'); // exclamation mark says that the developer knows 
// that the button is there and there will not be null
button?.addEventListener('click', event => {
    let namef = 'Max'; // local variable
    console.log(event)
})