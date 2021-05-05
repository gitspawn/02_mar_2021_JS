// ARRAYS

/*
99.9999999999999999999999999999999999999999999999999999
[]
new Array()
*/


// let srt = 'sadadsdsad';
// let str = new String('sadadsdsad')

// let arr = new Array(10);
// let arr = [];
// console.log(arr)
// let name = 'vova';
// let age = 30;



// let arrNumbers = [10, 20, 30, 40];
// let arrNames = ['vova', 'sara', 'bob'];
// let cartItems = ['apples', 'bananas', 'sumsumg', 'cake']
// console.log(cartItems[1]);
// console.log(cartItems[0]);
// console.log(cartItems[3]);

// let arr = ['hello', age, 100, ['a', b, 'c'], name, true, { name: 'vova' }, null, undefined, 200, 'DSVvcx'];



// let cartItems = ['apples', 'bananas', 'sumsumg', 'cake', 'gamburger']
// 0,         1          2,       3
// console.log(cartItems)
// Arr length
// console.log(cartItems.length);

// Get index
// console.log(cartItems[2])


// Check for arr
// console.log(typeof cartItems) // object
// console.log(Array.isArray(cartItems))


// Get last index
// console.log(cartItems[cartItems.length - 1])

// Insert to arr
// cartItems[1] = 'pizza';
// delete cartItems[1]
// console.log(cartItems)

// cartItems[20] = 'kebab';
// console.log(cartItems)
// console.log(cartItems[18])


// Get index
// let cartItems = ['apples', 'bananas', 'sumsumg', 'cake', 'gamburger']
// console.log(cartItems)

// console.log(cartItems.indexOf('sumsumg')) // 2
// console.log(cartItems.indexOf('sara')) // -1


// Search in array
// if (cartItems.indexOf('bananas') !== -1) {
//   console.log('Нашли')
// }

// if (cartItems.indexOf('sara') === -1) {
//   console.log('Не Нашли')
// }

// console.log(typeof cartItems.includes('sumsumg')) // Type Boolean
// console.log(typeof cartItems.includes('sumsumg')) // true
// console.log(cartItems.includes('sara')) // false


// Concat
//  'vava' + 'sara'
// let arrNumbers = [10, 20, 30, 40, 50];
// let cartItems = ['apples', 'bananas', 'sumsumg', 'cake', 'gamburger']

// let newArr = cartItems.concat(arrNumbers)
// Spred
// let newArr = [...cartItems, ...arrNumbers]

// console.log(cartItems)
// console.log(newArr)


// String to Array
// let str = 'to be or not to be that is the question'
// console.log(str)
// let strToArr = str.split(' ')
// console.log(Array.isArray(strToArr))
// console.log(strToArr)
// let revArr = strToArr.reverse();
// let revStr = revArr.join(' ')
// console.log(revStr)

// let str = 'abcdefg';
// console.log(str.split(''))


// MAGIC!!!
// split-reverse-join


// Other methods
// Arrays HOF
// [].forEach()
// [].map()
// [].find()
// [].sort()
// [].every()
// [].some();
// [].reduce()



// Splice ARR 
// splice(startIdex, qty)
// let arrNumbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(arrNumbers)
// console.log(arrNumbers.length)
// delete arrNumbers[2]

// console.log(arrNumbers)
// console.log(arrNumbers.length)

// let val = arrNumbers.splice(); // []
// val = arrNumbers.splice(0); // copy
// val = arrNumbers.splice(1); //  10
// val = arrNumbers.splice(2); // 10, 20
// val = arrNumbers.splice(0, 1);
// console.log(val)


// Arr push() -- add to end
// [].push()
// [].shift()
// [].pop()
// [].unshift()


// let cartItems = ['apples', 'bananas', 'potato'];
// cartItems.push('pizza');
// cartItems.push('gamburger');
// cartItems.push('qwe', 'asd', 100)
// console.log(cartItems)


// Shift - removes first
// let cartItems = ['apples', 'bananas', 'potato'];
// cartItems.shift()
// console.log(cartItems)

// Pop - remove last element
// let cartItems = ['apples', 'bananas', 'potato'];
// cartItems.pop()
// console.log(cartItems)


// unshift - add to start
// let cartItems = ['apples', 'bananas', 'potato'];
// cartItems.unshift(100)
// console.log(cartItems)


// ARRAY LOOPING
// let fruits = ['pear', 'melon', 'apple', 'kiwi']; // length 4
// console.log(fruits)
// console.table(fruits)
// console.info(fruits)

// fruits[0]
// fruits[1]
// fruits[2]

// FOR
// let len = fruits.length
// for (let i = 0; i < len; i += 1) {
//   console.log(fruits[i])
// }

// let numbers = [1, 2, 3, 4, 5];
// let len = numbers.length;
// for (let i = 0; i < len; i += 1) {
//   console.log(numbers[i] * 3)
// }

// let fruits = ['pear', 'melon', 'apple', 'kiwi'];
// let len = fruits.length
// let newArr = []

// Find in arr
// for (let i = 0; i < len; i += 1) {
//   if (fruits[i] === 'melon') {
//     console.log('Нашли!')
//   }
// }

// Find and replace
// let fruits = ['pear', 'melon', 'apple', 'kiwi'];
// let len = fruits.length
// let item;
// for (let i = 0; i < len; i += 1) {
//   if (fruits[i] === 'melon') {
//     item = fruits[i].toUpperCase()
//     console.log(item)
//     // fruits.push(item)
//     fruits.splice(i, 1, item)
//   }
// }
// console.log(fruits)


// FOR...OF / FOR...IN
// let fruits = ['pear', 'melon', 'apple', 'kiwi'];
// for (let fruit of fruits) {
//   console.log(fruit)
// }

// let fruits = ['pear', 'melon', 'apple', 'kiwi'];
// for (let fruit in fruits) {
//   console.log(fruits[fruit])
// }


