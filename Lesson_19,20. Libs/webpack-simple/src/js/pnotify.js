import { alert, notice, info, success, error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/Angeler.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';


// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info',
//   width: '660px'
// });

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice."
// });

// const myInfo = info({
//   text: "I'm an info message."
// });

// const mySuccess = success({
//   text: "I'm a success message."
// });

// const myError = error({
//   text: "I'm an error message."
// });


function success_export() {
  return success({
    text: "I'm a success message."
  })
}


// module.exports = success_export
export default success_export