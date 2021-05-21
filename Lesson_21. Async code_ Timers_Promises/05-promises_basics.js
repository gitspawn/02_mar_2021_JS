// - pending - ждет;
// - resolve - дождался - успех
//                       - ошибка
// - reject


// let promise = new Promise((resolve, reject) => {
// resolve(4);
// resolve({ vova: 'Vova' });
// reject('qwe');
// });
// console.log(promise);



// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Success');
//     resolve([1, 2, 3, 4, 5]);
//   }, 2000);

//   // resolve(5);
// });

// console.log(promise);
// promise.then((result) => { console.log(result); });

// ==================================

// Server mimic
// let promise = new Promise((resolve, reject) => {
//   let success = Math.random() > 0.3;

//   setTimeout(() => {
//     if (success) {
//       resolve({ name: 'Vova', age: 30 });
//     }
//     reject('Server error');
//   }, 500);
// });

// promise.then((result) => { console.log(result); });

// =============================================


// Data inside then
// console.log('Before');
// let datafromServer;

// let promise = new Promise((resolve, reject) => {
//   let success = Math.random() > 0.3;

//   setTimeout(() => {
//     if (success) {
//       resolve({ name: 'Vova', age: 30 });
//     }
//     reject('Server error');
//   }, 500);
// });

// promise.then((result) => {
//   console.log('inside then', result);
//   datafromServer = result;
// });

// console.log('after promise', datafromServer);
// console.log('After');

// ===================================

// let promise = new Promise((resolve, reject) => {
//   let success = Math.random() > 0.3;

//   setTimeout(() => {
//     if (success) {
//       resolve({ name: 'Vova', age: 30 });
//     }
//     reject('Server error');
//   }, 500);
// });

// promise
//   .then((result) => onResolve(result))
//   .catch(err => console.log(err));


// function onResolve(result) {
//   console.log(result);
// }


// Chaining
// let promise = new Promise((resolve, reject) => {
//   // resolve(['ew', 12, 34, { name: 'vova' }]);
//   // reject('Error');

//   // resolve('vova');
//   reject('Some error...');
// });

// // console.log(promise);

// promise
//   .then((name) => { console.log(name); })
//   .catch((err) => {
//     console.log(err);
//   });




let promise = new Promise((resolve, reject) => {
  resolve(5);
  // reject('My Err...');
});

// console.log(promise);

promise
  .then((data) => {
    console.log(data);
    return data * 2;
  })
  .then((num) => {
    console.log(num);
    return num + 50;
  })
  .then((sum) => {
    console.log(sum);
  })
  .catch(err => console.log(err));




// Promise
//   .then();
//   .then();
//   .then();
//   .catch ()
//   .finaly()