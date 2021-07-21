import React, { Component } from "react";

// Conttrolled element
// export default class SignupForm extends Component {
//     state = {
//         inputValue: "",
//     };

//     handleChange = (event) => {
//         this.setState({ inputValue: event.target.value });
//     };

//     render() {
//         return (
//             <div>
//                 <form>
//                     <input
//                         onChange={this.handleChange}
//                         type="text"
//                         value={this.state.inputValue}
//                     />
//                 </form>
//             </div>
//         );
//     }
// }

// onChange
// input.addEventListener("input", () => {});

// ================================================

let Subscription = {
    FREE: "free",
    BASIC: "basic",
    PRO: "pro",
};

// SignupForm
export default class SignupForm extends Component {
    state = {
        email: "",
        password: "",
        subscription: "",
        age: "",
        agreed: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit");
    };

    // hanldeEmailChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({ email: event.target.value });
    // };

    // hanldePasswordChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({ password: event.target.value });
    // };

    handleChange = (event) => {
        let { name, value } = event.target;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value,
        });
    };

    handleSubscriptionChange = (event) => {
        this.setState({
            subscription: event.target.value,
        });
    };

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    handleAgreedChange = (event) => {
        this.setState({
            agreed: event.target.checked,
        });
    };

    render() {
        let { email, password, subscription, age, agreed } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input
                        // onChange={this.hanldeEmailChange}
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        // onChange={this.hanldePasswordChange}
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        value={password}
                    />
                </label>

                {/* <label id='123123'>User Name</label>
                <input htmlFor="123123"
                        // onChange={this.hanldePasswordChange}
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                    /> */}

                {/* Radio buttons */}
                <div role="group">
                    <label>
                        Free
                        <input
                            type="radio"
                            value="free"
                            checked={Subscription.FREE === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                    <label>
                        Basic
                        <input
                            type="radio"
                            value="basic"
                            checked={Subscription.BASIC === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                    <label>
                        Pro
                        <input
                            type="radio"
                            value="pro"
                            checked={Subscription.PRO === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                </div>
                <br />

                {/* Select */}
                <select onChange={this.handleAgeChange} name="age" value={age}>
                    <option value="" disabled>
                        Choose age...
                    </option>
                    <option value="18-25">18-25</option>
                    <option value="25-36">26-36</option>
                    <option value="37+">37+</option>
                </select>
                <br />

                {/* Chekbox */}
                <label>
                    <input
                        onChange={this.handleAgreedChange}
                        type="checkbox"
                        checked={agreed}
                    />
                    License agrement
                </label>
                <br />
                <button type="submit" disabled={!agreed}>
                    Submit as {email}
                </button>
            </form>
        );
    }
}
