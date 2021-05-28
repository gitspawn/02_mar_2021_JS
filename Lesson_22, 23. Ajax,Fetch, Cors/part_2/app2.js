class News {
  constructor(url) {
    this.url = url;
    this.prevButton = document.querySelector("#prev");
    this.nextButton = document.querySelector("#next");
    this.input = document.querySelector("input");
    this.span = document.querySelector(".page-amount");
    this.list = document.querySelector(".list");
    this.counter = 1;
  }

  fetchNews() {
    let url = this.url + this.counter;
    return fetch(url)
      .then((res) => res.json())
      .then((data) =>
        data.response.status === "ok"
          ? data
          : alert("Не верный ответ сервера...")
      )
      .catch(alert);
  }

  render() {
    this.fetchNews().then((data) => {
      console.log(data);
      this.renderNews(data.response.results);
      this.renderPagination(data.response);
    });
  }

  renderNews(arrResults) {
    this.list.innerHTML = "";
    let liCollection = arrResults.map((el) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute("href", el.webUrl);
      a.setAttribute("target", "_blank");
      a.textContent = el.webTitle;

      li.append(a);
      return li;
    });
    this.list.append(...liCollection);
  }

  renderPagination(response) {
    this.span.textContent = response.pages;
    this.input.value = response.currentPage;

    if (this.counter > 1 && this.counter <= response.pages) {
      this.prevButton.disabled = false;
      this.nextButton.disabled = false;

      this.counter = response.currentPage;
    }

    if (this.counter === 1) {
      this.prevButton.disabled = true;
    }

    if (this.counter === response.pages) {
      this.nextButton.disabled = true;
    }

    this.input.value = this.counter;
  }

  nextPage() {
    this.counter += 1;
    this.render();
  }

  prevPage = () => {
    this.counter -= 1;
    this.render();
  };

  inputChange = (event) => {
    let inputValue = event.target.value;
    this.counter = Number(inputValue);

    if (!inputValue) {
      return;
    }
    this.render();
  };

  addListeners() {
    this.nextButton.addEventListener("click", this.nextPage.bind(this));
    this.prevButton.addEventListener("click", this.prevPage);
    this.input.addEventListener("input", this.inputChange);
    window.addEventListener("load", this.fetchNews.bind(this));
  }

  init() {
    this.addListeners();
    this.render();
  }
}

let API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";
let url = `https://content.guardianapis.com/search?lang=en&q=ukraine&api-key=${API_KEY}&page-size=20&page=`;

new News(url).init();

// ==========================================================

// fetch(url)
//     .then(res => res.json()).then(logData);

// function logData(data) {
//     console.log(data);
// }
