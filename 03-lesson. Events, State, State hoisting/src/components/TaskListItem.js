import React from "react";

export default function TaskListItem({ text, onRemove }) {
    return (
        <li className="TaskList-item">
            <p className="TaskList-text">{text}</p>
            <section className="TaskList-actions">
                <button onClick={onRemove} className="TaskList-button">
                    Delete task
                </button>
            </section>
        </li>
    );
}
