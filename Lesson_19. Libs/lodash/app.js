// console.log(_())


// let lodash = _
// console.log(lodash())

// let res = _.isEqual(5, 10)
// res = _.isEqual('aa', 'aa')

// function isEq(a, b)  {
//   if (a === b ) {
//     return true
//   }
//   return false
// }

// console.log(res)


// let arr = [1,2,3,4,5];
// arr = 'qwe'
// let res = Array.isArray(arr);
// console.log(res)



// let res = _.isArray([1,2,3,4])
// res = _.isArray('qwe')
// console.log(res)
// _.chunk(array, [size=1])



// _.forEach([1,2,3], (elem) => {
//   console.log(elem)
// })

// [1,2,3,4].forEach(() => {
  
// })


// _.each([1,2,3,5], (elem) => {
//   console.log(elem)
// })


// let arr = [1,2,3,3,'pizza',false,1,2,0,'qwe', 'pizza'];

// console.log(arr)

// let arrUnic = _.uniq(arr)
// console.log(arrUnic)


// _.map(collection, [iteratee=_.identity])


// let users = [
//   {id: 1, name: 'Vova'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Maike'}
// ]

// let names = users.map(({name}) => {
//   return name
// })

// let names = users.map((item) => item.name)
// let names = users.map(({name}) => name)
// console.log(names)

// let names = _.map(users, 'name')
// let idies = _.map(users, 'id')

// console.log(names)
// console.log(idies)

// =========================
// let users = [
//   {id: 1, name: 'Vova'},
//   {id: 2, name: 'Sara'},
//   {id: 2, name: 'Bob'},
//   {id: 3, name: 'Maike'}
// ]

// let arr = [1,2,4,5,6]
// let filtered = _.filter(arr, (elm) => {
//   return elm > 3
// })

// console.log(filtered)

// let filterUser = users.filter(({id}) => id === 2)
// console.log(filterUser)

// let filterUser = _.filter(users, {id: 2})
// console.log(filterUser)

// let findUser = _.find(users, {id: 2})
// console.log(findUser)

// =============================
// sortBy /  groupBy


// let users = [
//   {id: 1, name: 'Vova', likes: 200}, 
//   {id: 2, name: 'Sara', likes: 1000},
//   {id: 2, name: 'Bob', likes: 500},
//   {id: 3, name: 'Maike', likes: 7}
// ]

// let sbLikes = _.sortBy(users, 'likes').reverse();
// sbLikes = _.sortBy(users, 'likes').reverse()
// console.log(sbLikes)


// let gbLikes = _.groupBy(users, 'likes')
// console.log(gbLikes);


// ==========================
// chunk

// let arr = [1,2,3,3,'pizza',false,1,2,0,'qwe', 'pizza'];
// console.log(arr.length)
// 3
//  3 x 3
// 1 X 2
// let chunkArr =  _.chunk(arr, 3)
// console.log(chunkArr)
