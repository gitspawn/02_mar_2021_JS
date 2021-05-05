// let a = 100; // 200
// let b = 200; // 100

// Rest opreator
// [a, b] = [200, 100]

// console.log(a)
// console.log(b)



// Rest / Spresd for Arrays
// ...


// Rest  =  Spred
/*
Rest operator
... =
Spred operator
 = ...
*/

// let citiesOfUkraine = ['Kyiv', 'Lviv', 'Odesa', 'Dnipro'];
// let citiesOfEurope = ['London', 'Milan', 'Paris', 'Berlin'];
// let cities = citiesOfUkraine.concat(citiesOfEurope);
// console.log(cities)

// let cities = [
//   ...citiesOfUkraine,
//   ...citiesOfEurope,
// ]

// cities = [
//   ...citiesOfEurope,
//   ...citiesOfUkraine
// ]
// console.log(cities)


// let minNum = Math.min(...[1, 2, 0, -3, 3, 4])
// console.log(minNum)


// let citiesOfUkraine = ['Kyiv', 'Lviv', 'Odesa', 'Dnipro'];

// let [AA, BT, ВН, AE] = citiesOfUkraine;
// let [AA, BT, ...others] = citiesOfUkraine;
// let [AA, BT, ...rest] = citiesOfUkraine;

// console.log(AA)
// console.log(BT)
// console.log(rest)
// console.log(others)
// console.log(ВН)
// console.log(AE)

// =============================
// Rest / Spresd for Objects

// let vova = {
//   name: 'Vova',
//   age: 20,
//   status: 'Moderator'
// }

// let sara = {
//   ...vova,
//   name: 'Sara',
//   age: 17,
// }


// console.log(vova === sara)
// console.log(sara)
// ==================================
// Desturcturing
// let person = {
//   firstName: 'Sara',
//   lastName: 'Smith',
//   age: 17,
//   email: 'sara@i.ua',
//   hobbies: ['music', 'insta bloger', 'tv-shows'],
//   adress: {
//     zip: 12345,
//     city: 'Kyiv',
//     street: 'Elm Street',
//     house: 1428
//   },
// }

// let { firstName: name, email: userEmail } = person
// console.log(name)
// console.log(userEmail)
// let { firstName, age, ...rest } = person
// console.log(rest)


// let { zip } = person.adress
// console.log(zip)

// if (zip) { }
// if (person.adress.zip) { }

// console.log(person.adress.zip)
// let { firstName, email } = person

// let { age } = person
// console.log(age)
// console.log(person.age)



// Arguments Destucturing

let user = {
  id: 3,
  name: 'Bob',
  age: 30
};

let admin = {
  id: 3,
  admiName: 'Sara',
  age: 30
};


function showData({ admiName }) {
  console.log(admiName)
}
showData(admin)



