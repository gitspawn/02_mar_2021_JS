import React, { Component } from "react";

// export default class Calcprops extends Component {
//     state = {
//         name: "Pluto",
//         lastName: "Nash",
//     };

//     render() {
//         let { name, lastName } = this.state;
//         return <div>fullName : {name + " " + lastName}</div>;
//     }
// }

export default class Calcprops extends Component {
    state = {
        good: 5,
        neutral: 10,
        bad: 46,
    };

    calcTotal = () => {
        let total = Object.values(this.state).reduce((acc, feedback) => {
            return acc + feedback;
        }, 0);

        return total;
    };

    render() {
        return <div>{this.calcTotal()}</div>;
    }
}
