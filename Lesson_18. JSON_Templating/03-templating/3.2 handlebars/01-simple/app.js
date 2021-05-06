// Handlebar templating
let frameworks = ['vue', 'react', 'angular']
let menu = ['Home', 'About', 'Concat US', 'Shop'];

let templateRef = document.querySelector('.frameworcs-template').innerHTML
let divRef = document.querySelector('#root')


const templateScript = Handlebars.compile(templateRef);
let markup = templateScript(menu)
divRef.innerHTML = markup
