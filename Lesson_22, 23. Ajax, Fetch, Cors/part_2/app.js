/*
Thank you for registering with the open platform.
A new key has been created for you: 3534a47c-f615-488a-ac2b-1cbb3a5481ee
You can try this key by accessing https://content.guardianapis.com/search?api-key=3534a47c-f615-488a-ac2b-1cbb3a5481ee in your browser.
*/

// https://open-platform.theguardian.com/documentation/
// Example: https://content.guardianapis.com/search?page=2&q=debate&api-key=test

// let API_KEY = '3534a47c-f615-488a-ac2b-1cbb3a5481ee'


/*

apiUrl: "https://content.guardianapis.com/australia-news/2021/mar/09/harry-and-meghan-interview-stirs-debate-about-australia-becoming-a-republic"
id: "australia-news/2021/mar/09/harry-and-meghan-interview-stirs-debate-about-australia-becoming-a-republic"
isHosted: false
pillarId: "pillar/news"
pillarName: "News"
sectionId: "australia-news"
sectionName: "Australia news"
type: "article"
webPublicationDate: "2021-03-09T04:31:21Z"
webTitle: "Harry and Meghan interview stirs debate about Australia becoming a republic"
webUrl: "https://www.theguardian.com/australia-news/
    */




class News {
    constructor(url) {
        this.url = url;
        this.prevButton = document.querySelector('#prev');
        this.nextButton = document.querySelector('#next');
        this.input = document.querySelector('input');
        this.span = document.querySelector('.page-amount');
        this.list = document.querySelector('.list');
        this.counter = 1;
    }


    fetchNews() {
        let url = this.url + this.counter;

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.response.status === 'ok') {
                    console.log(data);
                    this.renderNews(data.response.results);
                    this.renderPagination(data.response);
                }
            })
            .catch(alert);
    }


    renderNews(arrResults) {
        this.list.innerHTML = '';
        let liCollection = arrResults.map((el) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', el.webUrl);
            a.setAttribute('target', '_blank');
            a.textContent = el.webTitle;

            li.append(a);
            return li;
        });
        this.list.append(...liCollection);
    }


    // validatePageNumber(response) {
    //     if (this.input.value <= response.pages && this.input.value > 0) {
    //         this.nextButton();
    //     } else if () {

    //     }
    // }


    renderPagination(response) {
        this.span.textContent = response.pages;
        this.input.value = response.currentPage;
    };

    nextPage() {
        this.counter += 1;
        this.fetchNews();
        this.input.value = this.counter;
    }

    // prevPage() {
    //     this.counter -= 1;
    //     this.fetchNews();
    //     this.input.value = this.counter;
    // }

    prevPage = () => {
        this.counter -= 1;
        this.fetchNews();
        this.input.value = this.counter;
    };

    // inputChange(event) {
    //     let inputValue = event.target.value;
    //     this.counter = Number(inputValue);

    //     if (!inputValue) {
    //         return;
    //     }
    //     this.fetchNews();
    // }

    inputChange = (event) => {
        let inputValue = event.target.value;
        this.counter = Number(inputValue);

        if (!inputValue) {
            return;
        }
        this.fetchNews();
    };



    addListeners() {
        this.nextButton.addEventListener('click', this.nextPage.bind(this));
        // this.prevButton.addEventListener('click', this.prevPage.bind(this));
        this.prevButton.addEventListener('click', this.prevPage);
        // this.input.addEventListener('input', this.inputChange.bind(this));
        this.input.addEventListener('input', this.inputChange);
        window.addEventListener('load', this.fetchNews.bind(this));
    }

    init() {
        this.addListeners();
    }
};


let API_KEY = '3534a47c-f615-488a-ac2b-1cbb3a5481ee';
let url = `https://content.guardianapis.com/search?lang=en&q=ukraine&api-key=${API_KEY}&page-size=20&page=`;


new News(url).init();

// ==========================================================

// fetch(url)
//     .then(res => res.json()).then(logData);

// function logData(data) {
//     console.log(data);
// }