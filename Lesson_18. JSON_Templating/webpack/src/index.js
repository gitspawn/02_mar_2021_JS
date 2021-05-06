import "./css/base.scss";

import menuTemplate from './tempaltes/menu.hbs'
import menuData from './js/menu-data'
import refs from './js/refs'



let markup = menuTemplate(menuData)
refs.root.innerHTML = markup



