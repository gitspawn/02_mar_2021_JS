import React, { Component } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import Notification from "./Notification";
import ArticlesList from "./ArticlesList";

export default class App extends Component {
    state = {
        articles: [],
        error: false,
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        axios
            .get("https://hn.algolia.com/api/v1/search?query=react")
            .then((response) => {
                return this.setState({
                    articles: response.data.hits,
                    // loading: false,
                });
            })
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        let { articles, error, loading } = this.state;

        return (
            <div>
                {error && (
                    <Notification
                        message={`Something goes wrong...${error.message}`}
                    />
                )}
                {loading && <Spinner message="Loading..." />}
                {articles.length > 0 && <ArticlesList articles={articles} />}
            </div>
        );
    }
}
