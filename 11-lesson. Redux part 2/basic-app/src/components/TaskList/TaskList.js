import React from "react";
import "./TaskList.css";
import TaskListItem from "../TaskListItem";

export default function TaskList({ tasks, onUpdateTask, onRemoveTask }) {
    console.log(tasks);
    return (
        <ul className="TaskList">
            {tasks.map(({ id, text, completed }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    comleted={completed}
                    onRemove={() => onRemoveTask(id)}
                    onUpdate={() => onUpdateTask(id)}
                />
            ))}
        </ul>
    );
}
