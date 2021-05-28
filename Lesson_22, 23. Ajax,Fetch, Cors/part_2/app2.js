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
            let { results } = data.response;
            this.renderNews(results);
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

    renderPagination({ pages, currentPage }) {
        this.span.textContent = pages;
        this.input.value = currentPage;

        this.counter === 1
            ? (this.prevButton.disabled = true)
            : (this.prevButton.disabled = false);

        this.counter === pages // number of pages
            ? (this.nextButton.disabled = true)
            : (this.nextButton.disabled = false);
    }

    nextPage() {
        this.counter += 1;
        this.render();
    }

    prevPage = () => {
        this.counter -= 1;
        this.render();
    };

    // Про деструторизацию читать всем https://codeguida.com/post/1480
    // тут деструтокризация из event.target.value
    inputChange = ({ target: { value } }) => {
        this.counter = Number(value);

        // if (!inputValue) {
        //     return;
        // }
        // this.render();

        return !this.counter ? false : this.render();
    };

    addListeners() {
        this.nextButton.addEventListener("click", this.nextPage.bind(this)); // оставил для примера bind
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
