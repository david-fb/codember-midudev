const isValidPassword = (password) => {
    let orderedPassword = password.toString().split('').sort().join('');
    return password.toString() === orderedPassword;
}

const RANGE = {
    min: 11098,
    max: 98123,
}

const passwords = [...Array(RANGE.max).keys()].slice(RANGE.min).filter(password => {
  return password.toString().includes('55') && isValidPassword(password);
})

//console.log("passwords", passwords);
console.log("length =>", passwords.length);
console.log("position 55 =>", passwords[55]);
console.log(`submit => submit ${passwords.length}-${passwords[55]}`)