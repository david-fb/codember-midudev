const isValidPassword = (password) => {
    let passwordDigits = password.toString().split('').reverse().map(Number);
    let isValid = true;

    for (let i=0; i < passwordDigits.length - 1; i++){
        if(passwordDigits[i] < passwordDigits[i+1]) {
            isValid = false;
            break;
        }
    }
    return isValid;
}

const RANGE = {
    min: 11098,
    max: 98123
}
let passwords = [];

for(let pwd = RANGE.min; pwd <= RANGE.max; pwd++){

    if(pwd.toString().match(/55/) == null) continue;

    let validPassword = isValidPassword(pwd);
    if(!validPassword) continue;

    passwords.push(pwd);

}

//console.log("passwords", passwords);
console.log("length =>", passwords.length);
console.log("position 55 =>", passwords[55]);
console.log(`submit => submit ${passwords.length}-${passwords[55]}`)