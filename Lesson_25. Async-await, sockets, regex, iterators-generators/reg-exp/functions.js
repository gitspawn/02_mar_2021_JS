// Regular Expretion
// REG EXP

// let re = /hello/; // instanse of RegExp

// console.log(typeof re);
// console.log(re instanceof RegExp);
// console.log(re.source);


// RegExp Methods
// ============================
// exec(); null or arr
// let result = re.exec('hello');
// console.log(result);
// console.log(result.index);
// console.log(result.input);

// =================================
// test() true / false
// let result = re.test('world hello world');
// console.log(result);


// Srings Methods
// ======================
// str.match() похож на re.exec()
// null or arr
// let str = 'to be hello or not to be';
// let result = str.match(re);
// console.log(result);


// search()
// index or -1
// let str = 'to be hello or not to be';
// let result = str.search(re);
// console.log(result);


// replace()
// заменяет первое вхождение или пустое
// let str = 'to be  or  not to be';
// let result = str.replace(re, 'pizza');
// console.log(result);


//  From Webpack config

//   /\.m?js$/,  .js  .mjs
//  /\.css$/,
// /\.s[ac]ss$/i, sass scss

//  /\.hbs$/,   .hbs



// Квантификаторы 
let re = /hello/;
// re = /hello/i; // case insensetive
re = /hello/g; // global search
re = /hello/gi; // global search + case insensetive
re = /^h/; // first letter
re = /^h/i; // first letter case insensetive
re = /^hello/i; // first word
re = /o$/i; // last letter
re = /hello$/i; // last word
re = /h.llo/i; //  only 1 symbol
re = /h*llo/i; // any number of symbols or no symbols
// *.jpg
re = /h\.llo/i; // dot symbol
re = /he?ll?o/i; // 1 symbol or no symbol befol l letter
re = /gr[ea]y/i; //  a or e between r and y
re = /^[ea]y/i; //  starts on a or e before y
re = /[^ea]y/i; //  Match anythig exept [e or a]
re = /[A-Z]y/i; //  Match anythig exept [e or a]
re = /[A-Za-z]y/; // 
re = /[0-9]y/; // 
re = /\W/; //  





// replace()
// заменяет первое вхождение или пустое
// let str = 'to be hEllo or not HELlo to be';
// let result = str.replace(re, 'pizza');
// console.log(result);

// let result = re.test('343rer');
// console.log(result);


// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ /;




// https://regex101.com/
