import React, { Component } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import Notification from "./Notification";
import ArticlesList from "./ArticlesList";
import SearchForm from "./SearchForm";
import articlesApi from "../sevices/articlesApi";

export default class App extends Component {
    state = {
        articles: [],
        error: false,
        loading: false,
        searchQuery: "",
        page: 0,
    };

    componentDidMount() {
        // this.setState({ loading: true });
        // axios
        //     .get("https://hn.algolia.com/api/v1/search?query=react")
        //     .then((response) => {
        //         // console.log(response.data);
        //         return this.setState({
        //             articles: response.data.hits,
        //         });
        //     })
        //     .catch((error) => this.setState({ error }))
        //     .finally(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps);
        // console.log(prevState);

        let prevQuery = prevState.searchQuery;
        let nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            console.log("Можно обновлять State делать новый запрос");

            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        const { searchQuery, page } = this.state;

        this.setState({ loading: true });

        articlesApi
            .fetchArticlesWithQuery(searchQuery, page)
            .then((articles) =>
                this.setState((prevState) => ({
                    articles: [...prevState.articles, ...articles],
                    page: prevState.page + 1,
                }))
            )
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    };

    handleSearchFormSubmit = (query) => {
        console.log("value from form", query);
        this.setState({
            searchQuery: query,
            page: 0,
            articles: [],
        });
    };

    render() {
        let { articles, error, loading } = this.state;

        return (
            <div>
                <SearchForm onSubmit={this.handleSearchFormSubmit} />

                {/* <SearchForm /> */}
                {error && (
                    <Notification
                        message={`Something goes wrong...${error.message}`}
                    />
                )}
                {loading && <Spinner message="Loading..." />}
                {articles.length > 0 && <ArticlesList articles={articles} />}
                {articles.length > 0 && !loading && (
                    <button type="button" onClick={this.fetchArticles}>
                        Load more
                    </button>
                )}
            </div>
        );
    }
}
