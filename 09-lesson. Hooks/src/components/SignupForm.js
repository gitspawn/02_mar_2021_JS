import React, { Component, useState } from "react";

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: "flex",
        flexDirection: "column",
    },
};

export default function SignupForm() {
    //     state = {
    //         email: "",
    //         password: "",
    //     };

    // let [state, setFormState] = useState({email: ''})

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let updateEmail = (event) => {
        setEmail(event.target.value);
    };

    let updatePassword = (event) => {
        setPassword(event.target.value);
    };

    let handlSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(email, password);
    };

    return (
        <form style={styles.form} onSubmit={handlSubmit}>
            <label style={styles.label}>
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                />
            </label>

            <label style={styles.label}>
                <span>Password</span>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                />
            </label>

            <button type="submit">Sign up</button>
        </form>
    );
}

// export default class SignupForm extends Component {
//     state = {
//         email: "",
//         password: "",
//     };

//     handleChange = (evt) => {
//         const { name, value } = evt.target;
//         this.setState({ [name]: value });
//     };

//     render() {
//         return (
// <form style={styles.form}>
//     <label style={styles.label}>
//         <span>Email</span>
//         <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//         />
//     </label>

//     <label style={styles.label}>
//         <span>Password</span>
//         <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//         />
//     </label>

//     <button type="submit">Sign up</button>
// </form>
//         );
//     }
// }
