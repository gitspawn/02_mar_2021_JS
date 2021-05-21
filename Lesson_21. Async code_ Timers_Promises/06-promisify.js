// let fetchUser = (userName) => {
//   let success = Math.random() > 0.3;
//   let user = { name: userName, age: 20 };
//   let err = 'Server fetch Error...';

//   return success ? user : err;
// };

// console.log(fetchUser('Vova'));

// ======================================
// Callbaks

// let fetchUser = (userName, onSucces, onError) => {
//   setTimeout(() => {
//     let success = Math.random() > 0.3;
//     if (success) {
//       let user = { name: userName, age: 20 };
//       onSucces(user);
//       return;
//     }

//     let err = 'Server fetch Error...';
//     onError(err);

//   }, 1000);
// };

// fetchUser('Vova', onSucces, onError);

// function onSucces(user) {
//   console.log(user);
// }

// function onError(err) {
//   console.log(err);
// };


//===========================
// Promisify

// let fetchUser = (userName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = Math.random() > 0.3;
//       if (success) {
//         let user = { name: userName, age: 20 };
//         resolve(user);
//         return;
//       }

//       let err = 'Server fetch Error...';
//       reject(err);

//     }, 1000);
//   });
// };

// fetchUser('Sara')
//   .then(user => console.log(user))
//   .catch(err => console.log(err));


// ==============================================
// Delay

let makeDelay = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};



let timeOuter;

makeDelay(3000).then((time) => {
  console.log('inside', time);
  timeOuter = time;
});
// makeDelay(5000).then((time) => { console.log(time); });
// makeDelay(100).then((time) => { console.log(time); });
// makeDelay(1500).then((time) => { console.log(time); });

console.log('outside', timeOuter);

