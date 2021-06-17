import React from "react";
import "./TaskList.css";
import TaskListItem from "../TaskListItem";

export default function TaskList({ tasks, onRemoveTask }) {
    console.log(tasks);
    return (
        <ul className="TaskList">
            {tasks.map(({ id, text }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    onRemove={() => onRemoveTask(id)}
                />
            ))}
        </ul>
    );
}
