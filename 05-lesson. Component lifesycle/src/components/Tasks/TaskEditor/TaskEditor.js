import React, { Component } from "react";
import "./TaskEditor.css";

export default class TaskEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // Получем обработчик как проп и передаем туда текст
    this.props.onAddTask(this.state.text);
    // Ресетнуть форму
    this.setState({ text: "" });
  };

  render() {
    return (
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label className="TaskEditor-label">
          Text
          <input
            className="TaskEditor-input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="TaskEditor-button">
          Добавить заметку
        </button>
      </form>
    );
  }
}

// export default function TaskEditor({ onAddTask }) {
//   return (
//     <div className="TaskEditor">
//       <button type="button" onClick={onAddTask}>
//         Add task
//       </button>
//     </div>
//   )
// }
