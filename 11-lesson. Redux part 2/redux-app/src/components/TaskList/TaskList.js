import React from "react";
import "./TaskList.css";
import TaskListItem from "../TaskListItem";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";

function TaskList({ tasks, onRemoveTask, toggleCopleted }) {
    console.log(tasks);
    return (
        <ul className="TaskList">
            {tasks.map(({ id, text, completed }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    comleted={completed}
                    onRemove={() => onRemoveTask(id)}
                    onUpdate={() => toggleCopleted(id)}
                />
            ))}
        </ul>
    );
}

// let mapStateToProps = (state) => {
//     const { items, filter } = state.tasks;
//     let visibleTasks = items.filter((task) => task.text.includes(filter));

//     return {
//         tasks: visibleTasks,
//     };
// };

let mapStateToProps = (state) => {
    const { items, filter } = state.tasks;
    let lowerCaseFilter = filter.toLowerCase();

    let visibleTasks = items.filter((task) =>
        task.text.toLowerCase().includes(lowerCaseFilter)
    );

    return {
        tasks: visibleTasks,
    };
};

let mapDispathToProps = {
    onRemoveTask: tasksActions.removeTask,
    toggleCopleted: tasksActions.toggleCopleted,
};

export default connect(mapStateToProps, mapDispathToProps)(TaskList);
