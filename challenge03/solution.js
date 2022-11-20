import axios from "axios";
(async() => {
    const colors = (await axios.get('https://codember.dev/colors.txt'))["data"];
    //const colors = ['red', 'red', 'blue', 'red', 'red', 'red', 'green'];
    //const colors = ['green', 'red', 'blue', 'gray'];
    //const colors = ['blue', 'blue', 'blue', 'blue'];
    //const colors = ['red', 'green', 'red', 'green', 'red', 'green'];
    
    let aux = [];
    let currentArray = [];
    let combinations = []; //for fun, I want to know the combinations

    for(let i=0; i < colors.length; i++){
        /***
         * it checks if current color is is equal to the color in two positions before OR previous color is equal to next color
         * AND
         * current color must be different to previous color
         * push current color to currentArray and continue the loop
         */
        if(
            (colors[i] === colors[i - 2] || colors[i - 1] === colors[i + 1])
             && 
            (colors[i] !== colors[i - 1])
        ){
            currentArray.push(colors[i]);
            continue;
        }

        /*** 
         * the previous rules failed, so, it checks if current color can be with previous color. Anyway this is going to be replaced
            with an empty array
         * this was made mainly for the case in line 5 ==> const colors = ['green', 'red', 'blue', 'gray'];
         */
        if(currentArray.length === 1 && colors[i] !== colors[i - 1]) {
            currentArray.push(colors[i]);
        }

        // it checks if aux can be replaced with currentArray
        if(currentArray.length && currentArray.length >= aux.length){
            aux = [...currentArray];
            combinations.push(aux);
        }
        // Reset the array and push current color
        currentArray = [];
        currentArray.push(colors[i]);
    }
    if(currentArray.length >= aux.length){
        combinations.push(currentArray);
    }
    let answer = combinations[combinations.length - 1]; //we can use a ternary operator --- currentArray.length >= aux.length ? currentArray : aux

    console.log("combinations", combinations);
    console.log("answer", answer, answer.length, answer[answer.length -1]);
    console.log("submit ===>", `submit ${answer.length}@${answer[answer.length -1]}`)

})()