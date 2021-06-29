// Get params from props
import React, { Component } from "react";
import tvApi from "../services/tv-api";
import Navigation from "../components/Navigation";

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
            console.log(show);
            return this.setState({ show });
        });
    }

    render() {
        // let {
        //     name,
        //     image: { medium },
        // } = this.state.show;
        return (
            <>
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
