let horses = [
  "Green Thorn",
  "Mango",
  "Dark Spawn",
  "Cindarella",
  "Flying Fox",
  "Biscuit",
];


let getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let run = (horse) => {
  return new Promise((resolve, reject) => {
    let time = getRandomTime(2000, 5000);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};


// run(horses[0]).then(result => console.log(result));
// let promises = horses.map((horse) => {
//   return run(horse);
// });
// let promises = horses.map((horse) => run(horse));
let promises = horses.map(run);
console.log(promises);


Promise.all(promises).then(horse => console.table(horse));
Promise.race(promises).then(horse => console.table(horse));