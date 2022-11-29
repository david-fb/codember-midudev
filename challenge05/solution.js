import axios from 'axios';

(async() => {
    const mecenas = (await axios.get('https://codember.dev/mecenas.json'))["data"];
    let battleRoyale = mecenas.map((value, index) => {
        return {"name": value, "position": index}
    });
    while(battleRoyale.length > 1){
        let isOdd = battleRoyale.length % 2 !== 0;
        battleRoyale = battleRoyale.filter((value, index) => index % 2 === 0)
        if(isOdd) battleRoyale.shift();
    }
    
    console.log(battleRoyale);
    console.log(`submit => submit ${battleRoyale[0].name}-${battleRoyale[0].position}`);
})()
