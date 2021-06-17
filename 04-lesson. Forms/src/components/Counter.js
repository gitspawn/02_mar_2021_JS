import React, { Component } from "react";
import CounterControls from "./CounterControls";

{
    /* <Counter initialValue={10} step={2} /> */
}

// class Counter extends Component {
//     static defaultProps = { initialValue: 10, step: 2 };
//     static propTypes = {};

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <button
//                     type="button"
//                     onClick={(event) => {
//                         console.log(event);
//                     }}
//                 >
//                     Increment
//                 </button>
//                 <span> {0} </span>
//                 <button
//                     type="button"
//                     onClick={() => {
//                         console.log("Decrement click!!!");
//                     }}
//                 >
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }

// Привязка контекста
// class Counter extends Component {
//     static defaultProps = { initialValue: 10, step: 2 };
//     static propTypes = {};

//     constructor(props) {
//         super(props);
//         // this.handleIncrement = this.handleIncrement.bind(this);
//     }

//     handleIncrement = (event) => {
//         console.log(event);
//     };

//     handleDecrement = () => {
//         console.log("Decrement click!!!");
//     };

//     // handleIncrement(event) {
//     //     console.log(event);
//     // }

//     // handleDecrement() {
//     //     console.log("Decrement click!!!");
//     // }

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <button type="button" onClick={this.handleIncrement}>
//                     Increment
//                 </button>
//                 <span> {0} </span>
//                 <button type="button" onClick={this.handleDecrement}>
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }

//==============================================
// SetState
// class Counter extends Component {
//     static defaultProps = { initialValue: 20, step: 4 };
//     static propTypes = {};

//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     name: "Sara",
//         //     age: 20,
//         // };
//     }

//     state = {
//         value: this.props.initialValue,
//         qwe: "Vova",
//     };

//     handleIncrement = (event) => {
//         // console.log(this.state);
//         // this.state = 5;

//         // this.setState({
//         //     value: this.state.value + 1,
//         // });

//         this.setState((prevState, props) => {
//             console.log("prevState", prevState);
//             return {
//                 value: prevState.value + props.step,
//             };
//         });
//     };

//     handleDecrement = () => {
//         this.setState((prevSate, props) => {
//             return {
//                 value: prevSate.value - props.step,
//             };
//         });
//     };

//     render() {
//         // console.log(this.props);
//         let { value } = this.state;
//         return (
//             <div>
//                 <button type="button" onClick={this.handleIncrement}>
//                     Increment
//                 </button>
//                 {/* <span> {this.state.value} </span> */}
//                 <span> {value} </span>
//                 <button type="button" onClick={this.handleDecrement}>
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }

class Counter extends Component {
    static defaultProps = { initialValue: 20, step: 4 };
    static propTypes = {};

    constructor(props) {
        super(props);
        // this.state = {
        //     name: "Sara",
        //     age: 20,
        // };
    }

    state = {
        value: this.props.initialValue,
        qwe: "Vova",
    };

    handleIncrement = (event) => {
        // console.log(this.state);
        // this.state = 5;

        // this.setState({
        //     value: this.state.value + 1,
        // });

        this.setState((prevState, props) => {
            console.log("prevState", prevState);
            return {
                value: prevState.value + props.step,
            };
        });
    };

    handleDecrement = () => {
        this.setState((prevSate, props) => {
            return {
                value: prevSate.value - props.step,
            };
        });
    };

    render() {
        // console.log(this.props);
        let { value } = this.state;
        return (
            <div>
                {/* <span> {this.state.value} </span> */}
                <span> {value} </span>
                <CounterControls
                    onHandleIncrement={this.handleIncrement}
                    onHandleDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}

export default Counter;
