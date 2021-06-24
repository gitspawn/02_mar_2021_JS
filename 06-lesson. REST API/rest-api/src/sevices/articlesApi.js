import axios from "axios";

import React from "react";

function fetchArticlesWithQuery(searchQuery, page = 0) {
    return axios
        .get(
            `https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=10`
        )
        .then((response) => {
            // console.log(response.data.hits);
            return response.data.hits;
        });
}

export default {
    fetchArticlesWithQuery,
};

// articlesApi.fetchArticlesWithQuery
// articlesApi.pizza
