
// let promotionTimer = new Date('May 22, 2021 00:00:00').getTime();
// console.log(promotionTimer);

// let promotionTimerId = setInterval(() => {
//   let dateNow = new Date().getTime();
//   let distance = promotionTimer - dateNow;
//   console.log(dateNow);

//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//   let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//   let seconds = Math.floor(distance % (1000 * 60) / (1000));

//   console.log(`До конца акции осталось days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds:${seconds}`);


//   if (distance < 0) {
//     clearInterval(promotionTimerId);
//     console.log('Акция закончилась');
//   }

// }, 1000);



// Time stamp
// 1622322000000
// 1621630800000




// let days = Math.floor(distance / (1000 * 60 * 60 * 24));
// let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
// let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
// let seconds = Math.floor(distance % (1000 * 60) / (1000))

// ===============================================================

let promotionTimer = new Date('May 21, 2021 20:30:00').getTime();
console.log(promotionTimer);


let p = document.querySelector('p');
console.log(p);

let promotionTimerId = setInterval(() => {
  let dateNow = new Date().getTime();
  let distance = promotionTimer - dateNow;
  console.log(dateNow);

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(distance % (1000 * 60) / (1000));

  p.innerHTML = `До конца акции осталось days:${days}, hours:${hours}, minutes:${minutes}, seconds:${seconds}`;


  if (distance < 0) {
    clearInterval(promotionTimerId);
    // console.log('Акция закончилась');
    p.innerHTML = 'Акция закончилась';
  }

}, 1000);

