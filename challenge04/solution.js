const isValidNumber = (number) => {
    let numberString = number.toString().split('').reverse();
    let isValid = true;

    for (let i=0; i < numberString.length; i++){
        if(Number(numberString[i]) < Number(numberString[i+1])) {
            isValid = false;
            break;
        }
    }
    return isValid;
}

const MIN = 11098;
const MAX = 98123;
let numbers = [];

for(let i = MIN; i <= MAX; i++){

    if(i.toString().match(/55/) == null) continue;

    let valid = isValidNumber(i);
    if(!valid) continue;
    numbers.push(i);
}

//console.log("numbers", numbers);
console.log("length =>", numbers.length);
console.log("position 55 =>", numbers[55]);
console.log(`submit => submit ${numbers.length}-${numbers[55]}`)