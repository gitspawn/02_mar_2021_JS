//Вложенная навигация

import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvApi from "../services/tv-api";
import Searchbox from "../components/Searchbox";
import getQueryParams from "../utils/getQueryParams";

class Shows extends Component {
    state = {
        shows: [],
    };

    // componentDidMount() {
    //     tvApi
    //         .fetchShowWithQuery("cat")
    //         .then((shows) => this.setState({ shows }));
    // }

    componentDidMount() {
        // let queryString = "shows?query=pizza";
        // query {shows?query: "pizza"}

        let { query } = getQueryParams(this.props.location.search);
        if (query) {
            // console.log("Есть query");
            console.log("componentDidMount");
            this.fetchShows(query);
            return;
        }

        // console.log("Нет query грузим batman");
        console.log("else", "componentDidMount");
        this.fetchShows("batman");
    }

    componentDidUpdate(prevProps, prevSate) {
        // console.log("prevSate", prevSate.location);
        // console.log("prevProps", prevProps.location);
        let { query: prevQuery } = getQueryParams(prevProps.location.search);
        let { query: nextQuery } = getQueryParams(this.props.location.search);
        if (prevQuery !== nextQuery) {
            this.fetchShows(nextQuery);
        }

        // console.log(getQueryParams(this.props.location.search));

        // let qp = "/shows?query=cat";
        // let myQuery = getQueryParams(qp);
        // console.log("myQuery", myQuery);
    }

    fetchShows = (query) => {
        tvApi.fetchShowWithQuery(query).then((shows) => {
            if (shows) {
                this.setState({ shows });
            } else {
                alert("No shows found");
            }
        });
    };

    handleChangeQuery = (query) => {
        // console.log(query);

        // this.props.history.push("/about");

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        });

        // {
        //     key: 'ac3df4', // not with HashHistory!
        //     pathname: '/somewhere',
        //     search: '?some=search-string',
        //     hash: '#howdy',
        //     state: {
        //       [userDefined]: true
        //     }
        //   }
    };

    render() {
        let { match } = this.props;
        let { shows } = this.state;

        return (
            <>
                <Searchbox onSubmit={this.handleChangeQuery} />
                {shows.length > 0 && (
                    <ul>
                        {shows.map((show) => (
                            <li key={show.id}>
                                {/* <Link to={`${match.url}/${show.id}`}>
                                    <h1>{show.name}</h1>
                                    <img src={show.image.medium} />
                                    <hr />
                                </Link> */}

                                <Link
                                    to={{
                                        pathname: "/courses",
                                        search: "?sort=name",
                                        hash: "#the-hash",
                                        state: { fromDashboard: true },
                                    }}
                                />

                                <Link
                                    to={{
                                        pathname: `${match.url}/${show.id}`,
                                        state: { from: this.props.location },
                                    }}
                                >
                                    <h1>{show.name}</h1>
                                    <img src={show.image.medium} />
                                    <hr />
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
}

export default Shows;
