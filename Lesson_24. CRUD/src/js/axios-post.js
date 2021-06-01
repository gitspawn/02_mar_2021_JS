import axios from 'axios';



const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

let opt = {
    firstName: 'Fred',
    lastName: 'Flintstone'
};

axios.post(BASE_URL, opt).then(res => res.json()).then(data => console.log(data));
