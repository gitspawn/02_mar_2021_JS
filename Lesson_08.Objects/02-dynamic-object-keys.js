let bmw = {
    model: "x6",
    power: 300,
    price: 60000,
};

let audi = {
    model: "a4",
    power: 200,
    price: 35000,
};

// console.log(bmw.price)
// bmw.price = 75000
// console.log(bmw.price)
// console.log(audi.price)

// let bmwPrice = bmw['price']
// let audiPrice = audi['price']
// console.log(bmwPrice)
// console.log(audiPrice)

// function inputHandler(value, name) {
//     const obj = {
//         [name]: value
//     }
//     return obj;
// }

// let passwordObj = inputHandler('skfhsdkhfs', 'password');
// let userObj  = inputHandler('user@gmail.com', 'email');
// let loginObj =  inputHandler('user', 'login');

// console.log(passwordObj);
// console.log(userObj);
// console.log(loginObj);

// const user = {
//     password : passwordObj,
//     user: userObj,
//     login: loginObj
// }

// console.log(user);

let country = ["usa", "china", "russia", "india"];
let vakcine = ["Moderna", "Sinovac", "Sputnic V", "Covishield"];

// let vac = {
//   usa: 'Moderna',
//   china: 'Sinovac'
// }

function createVacObj(arrKeys, assValues) {
    let result = {};
    for (let i = 0; i < arrKeys.length; i += 1) {
        result[arrKeys[i]] = assValues[i];
    }
    return result;
}

let vakcineData = createVacObj(country, vakcine);
console.log(vakcineData);
