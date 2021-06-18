import React from "react";

export default function TaskListItem({ text, comleted, onUpdate, onRemove }) {
    return (
        <li className="TaskList-item">
            <p className="TaskList-text">{text}</p>

            <label>
                <input type="checkbox" checked={comleted} onChange={onUpdate} />
                Completed
            </label>
            <section className="TaskList-actions">
                <button onClick={onRemove} className="TaskList-button">
                    Delete task
                </button>
            </section>
        </li>
    );
}
