//Вложенная навигация
import Navigation from "../components/Navigation";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvApi from "../services/tv-api";

// const Shows = ({ match }) => {
//     const shows = [
//         { id: "id-1", name: "Show name 1" },
//         { id: "id-2", name: "Show name 2" },
//         { id: "id-3", name: "Show name 3" },
//         { id: "id-4", name: "Show name 4" },
//     ];

//     return (
//         <>
//             <Navigation />
//             {shows.map((show) => (
//                 <li key={show.id}>
//                     {/* <Link to="/shows/id-1">{show.name}</Link> */}
//                     <Link to={`${match.url}/${show.id}`}>{show.name}</Link>
//                 </li>
//             ))}
//         </>
//     );
// };

// export default Shows;

class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        tvApi.fetchShowWithQuery("cat").then((shows) => {
            // console.log(shows);
            return this.setState({ shows });
        });
    }

    render() {
        let { match } = this.props;
        let { shows } = this.state;

        return (
            <>
                <Navigation />
                {shows.length > 0 && (
                    <ul>
                        {shows.map((show) => (
                            <li key={show.id}>
                                <Link to={`${match.url}/${show.id}`}>
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
