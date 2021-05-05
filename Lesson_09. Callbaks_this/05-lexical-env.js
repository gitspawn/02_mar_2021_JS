// Lexical env
/*
Global env
Record: { }
Parent: null
*/


let x = 10;
/*
Global env
Record: { x: 10 }
Paremt: null
*/

const fn = function (z) {
  /*
 Record: {z: 30}
 Parent: Global env
 */

  let x = 100;
  /*
 Record: {z: 30, x: 100}
 Parent: Global env
 */
  return x + y + z

}
/*
Record: {x: 10, fn: function(){}}
Parent: Global env
*/



let y = 20

/*
Record: {x: 10, fn: function(){}, y: 20}
Parent: Global env
*/

// console.log(fn(30)) // 150


// =====================================


let a = 100
function sum(a) {
  // let a = 200
  console.log(a)
}

sum(300)



