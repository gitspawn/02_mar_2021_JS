import axios from 'axios';

// axios.get();
// axios.post();
// axios.patch();
// axios.delete();


const BASE_URL = 'https://jsonplaceholder.typicode.com/users';


axios.get(BASE_URL).then(res => res.json()).then(data => console.log(data));
