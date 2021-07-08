import React, { Component, useState, useEffect } from "react";
import axios from "axios";

// Сменить раут пока не пришел http-ответ чтобы не была утечка памяти

export default function News() {
    let [articles, setArticles] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://hn.algolia.com/api/v1/search?query=react")
            .then(({ data }) => setArticles(data.hits))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));

        return () => {
            // отмена HTTP запроса
            // AbortController
            // https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
            // Cancellation
            // https://github.com/axios/axios#cancellation
        };
    }, [articles, error, loading]);

    return (
        <ul>
            {articles.map(({ objectID, title, url }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

// export default class News extends Component {
//     state = {
//         articles: [],
//     };

//     componentDidMount() {
//         axios
//             .get("https://hn.algolia.com/api/v1/search?query=react")
//             .then(({ data }) => this.setState({ articles: data.hits }))
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.articles.map(({ objectID, title, url }) => (
//                     <li key={objectID}>
//                         <a href={url} target="_blank" rel="noopener noreferrer">
//                             {title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }
