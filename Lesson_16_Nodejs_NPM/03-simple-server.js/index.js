const chalk = require('chalk');
const express = require('express')
let app = express();
console.log(chalk.yellow.bold.italic('Hello world!'));



// app.get('/', (req, res)=>{
//   // res.send('Hello fom nodeJS');
//   res.json({
//     "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
//   })
// }) 


// app.get('/posts', (req, res)=>{
//   // res.send('Hello fom nodeJS');
//   res.json(
//    [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "qui est esse",
//       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
//    ]
//   )
// }) 


// HTML
app.use(function (req, res) { res.send("<h2>Hello</h2>"); });



const PORT = 3000;

app.listen(PORT, () => {
  console.log(chalk.green.bold('Listening on port'), PORT)
})


