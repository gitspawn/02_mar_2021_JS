import "./css/base.scss";
import msg from './js/pnotify.js'
import * as lodash from 'lodash';

console.log(lodash.isEqual(5, 10))


let {alert, notice, info, success, error } = msg



if (2 + 2 !== 4) {
  success({
      text: "I'm a success message."
  })
} else {
  error({
      text: "I'm an error message."
  });
}



