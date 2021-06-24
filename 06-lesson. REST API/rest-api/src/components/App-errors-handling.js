import React, { Component } from "react";
import axios from "axios";

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
        let articlesItems = articles.map(({ objectID, title, url }) => (
            <li key={objectID}>
                <a href={url} target="_blank">
                    {title}
                </a>
            </li>
        ));

        return (
            <div>
                {error && <p>Something goes wrong...</p>}
                {loading && <div>Loading...</div>}
                {articles.length > 0 && <ul>{articlesItems}</ul>}
            </div>
        );
    }
}
