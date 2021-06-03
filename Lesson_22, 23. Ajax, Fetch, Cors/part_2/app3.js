// Логика полученя данных
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

    createDomSelectors = () => {
        return {
            prevButton: this.prevButton,
            nextButton: this.nextButton,
            input: this.input,
            span: this.span,
            list: this.list,
        };
    };

    render() {
        this.fetchNews().then((data) => {
            console.log(data);

            let { results } = data.response;

            let dispayNews = new DisplayNews(
                results,
                data.response,
                this.createDomSelectors(),
                this.counter
            );
            dispayNews.renderNews(results);
            dispayNews.renderPagination(data.response);
        });
    }

    nextPage() {
        this.counter += 1;
        this.render();
    }

    prevPage = () => {
        this.counter -= 1;
        this.render();
    };

    inputChange = ({ target: { value } }) => {
        this.counter = Number(value);
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

//////////////////////==========================================
//  Логика отображения
class DisplayNews {
    constructor(arrResults, response, DomSelectors, counter) {
        this.arrResults = arrResults;
        this.response = response;
        this.domSelectors = DomSelectors;
        this.counter = counter;
    }
    renderNews(arrResults) {
        arrResults = this.arrResults;

        let { list } = this.domSelectors;
        list.innerHTML = "";
        let liCollection = arrResults.map((el) => {
            let li = document.createElement("li");
            let a = document.createElement("a");

            a.setAttribute("href", el.webUrl);
            a.setAttribute("target", "_blank");
            a.textContent = el.webTitle;

            li.append(a);
            return li;
        });
        list.append(...liCollection);
    }

    renderPagination(response) {
        let { span, input, prevButton, nextButton } = this.domSelectors;

        response = this.response;
        let { pages, currentPage } = response;

        span.textContent = pages;
        input.value = currentPage;

        this.counter === 1
            ? (prevButton.disabled = true)
            : (prevButton.disabled = false);

        this.counter === pages // number of pages
            ? (nextButton.disabled = true)
            : (nextButton.disabled = false);
    }
}
