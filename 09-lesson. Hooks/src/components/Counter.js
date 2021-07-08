import React, { useState, useEffect } from "react";

// React.useState

export default function Counter() {
    let [count, setCount] = useState(0); // [satate, setCount]

    let handleIncrement = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("count useEffect");
    }, [count]);

    let [textValue, setTextValue] = useState("");

    useEffect(() => {
        console.log("text useEffect");
    }, [textValue]);

    let handleChange = (event) => {
        setTextValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={handleChange} />
            <p>You clicked {count} times</p>
            <button type="button" onClick={handleIncrement}>
                Increment counter
            </button>
        </div>
    );
}

// export default class Counter extends Component {
//     state = {
//         count: 0,
//     };

//     handleIncrement = () => {
//         this.setState((state) => ({ count: state.count + 1 }));
//     };

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//             document.title = `You clicked ${this.state.count} times`;
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button type="button" onClick={this.handleIncrement}>
//                     Increment counter
//                 </button>
//             </div>
//         );
//     }
// }
