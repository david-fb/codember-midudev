import axios from 'axios';

(async () => {
    const usersFile = (await axios.get('https://codember.dev/users.txt')).data;
    const REQUIRED_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];
    
    let currentUser = 0;
    const users = usersFile.split('\n').reduce((acc, value) => {
        if(value === '') {
            currentUser++;
            return acc;
        }
        acc[currentUser] = acc[currentUser] ? [acc[currentUser], value].join(' ') : value;
        return acc;
    },[]);

    const validUsers = users.filter((user) => {
        return REQUIRED_FIELDS.every((field) => user.includes(`${field}:`))
    })

    console.log(validUsers.length);
    console.log(validUsers.pop());

})();

