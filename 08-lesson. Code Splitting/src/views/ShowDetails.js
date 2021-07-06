// Get params from props
import React, { Component } from "react";
import tvApi from "../services/tv-api";

import routes from "../routes";

// const ShowDetails = () => {
//     return <div>Show details...</div>;
// };

// export default ShowDetails;
// ==============================

export default class ShowDetails extends Component {
    state = {
        show: null,
    };

    componentDidMount() {
        tvApi.fetchShowDetails(this.props.match.params.showId).then((show) => {
            // console.log(show);
            return this.setState({ show });
        });
    }

    handleGoBack = () => {
        // console.log("Вернуться к списку шоу");
        // this.props.history.push("/shows");

        let { state } = this.props.location;

        // console.log(state);

        if (state.from) {
            this.props.history.push(state.from);
        } else {
            this.props.history.push(routes.shows);
        }
    };

    render() {
        // let {
        //     name,
        //     image: { medium },
        // } = this.state.show;
        return (
            <>
                <button type="button" onClick={this.handleGoBack}>
                    Вернуться к списку шоу
                </button>
                {this.state.show && (
                    <>
                        <h3>{this.state.show.name}</h3>
                        <img
                            src={this.state.show.image.medium}
                            alt={this.state.show.name}
                        />
                    </>
                )}
            </>
        );
    }
}
