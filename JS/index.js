//alert('Hello!');

let greetings = 'World';
//alert(greetings)

const message = 'hello ' + greetings;
alert (message);

const userAge = parseFloat(prompt('enter your age'));
alert('your age is ' + userAge);


const nextAge = add(userAge, 1);
alert (nextAge);

if (userAge >= 18) {
    alert('you are adult')
}else{
    alert('you are too young')
}

function add(a, b) {
    const result = a + b;
    return result;
}


