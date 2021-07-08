import React, { Component, useState, useEffect, useRef } from "react";

const styles = {
    clockface: {
        fontSize: 32,
        fontWeight: 500,
    },
};

export default function Clock() {
    let [time, setTime] = useState(new Date());

    let intervalId = useRef();

    // console.log(intervalIduseRef);

    useEffect(() => {
        console.log("useEffect");
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        console.log(intervalId);

        return () => {
            console.log("clear Interval before next useEffect");
            clearInterval(intervalId.current);
        };
    }, []);

    return (
        <p style={styles.clockface}>
            Current time: {time.toLocaleTimeString()}
        </p>
    );
}

// export default class Clock extends Component {
//     state = {
//         time: new Date(),
//     };

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({ time: new Date() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalId);
//     }

//     render() {
//         return (
//             <p style={styles.clockface}>
//                 Current time: {this.state.time.toLocaleTimeString()}
//             </p>
//         );
//     }
// }
