import React, { Component } from "react";
import "./TaskEditor.css";

export default class TaskEditor extends Component {
    state = {
        text: "",
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.text}
                />
                <button type="submit">Добавить заметку</button>
            </form>
        );
    }
}

// export default function TaskEditor({ onAddTask }) {
//     return (
//         <div className="TaskEditor">
//             <button onClick={onAddTask} type="button">
//                 Add task
//             </button>
//         </div>
//     );
// }
