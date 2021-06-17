import React from "react";
import "./TaskEditor.css";

export default function TaskEditor({ onAddTask }) {
    return (
        <div className="TaskEditor">
            <button onClick={onAddTask} type="button">
                Add task
            </button>
        </div>
    );
}
