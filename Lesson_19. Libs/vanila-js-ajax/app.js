// AJAX old school

function getData () {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    console.log(xhr.readyState)

    if (xhr.readyState == 200) {
      // ADSXFVxfv
    }
  }

  xhr.send()
}

