import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import Filter from "./Filter";

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: "",
    };

    componentDidMount() {
        // console.log("Didmount");
        let tasks = localStorage.getItem("tasks");
        console.log(tasks);
        if (tasks) {
            this.setState({
                tasks: JSON.parse(tasks),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate");
        // console.log("prevProps", prevProps);
        // console.log("prevState", prevState);
        // console.log("state", this.state);

        if (prevState.tasks !== this.state.tasks) {
            // console.log("to Localsorage");
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
    }

    addTask = (text) => {
        const task = {
            id: uuidv4(),
            text,
            completed: false,
        };

        this.setState((prevState) => {
            return {
                tasks: [...prevState.tasks, task],
            };
        });
    };

    removeTask = (taskId) => {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.filter(({ id }) => id !== taskId),
            };
        });
    };

    updateCompleted = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            ),
        }));
    };

    changeFilter = (filter) => {
        this.setState({ filter });
    };

    getVisibleTasks = () => {
        const { tasks, filter } = this.state;

        return tasks.filter((task) =>
            task.text.toLowerCase().includes(filter.toLowerCase())
        );
    };

    render() {
        const { filter } = this.state;
        const visibleTasks = this.getVisibleTasks();

        return (
            <>
                <TaskEditor onAddTask={this.addTask} />
                {visibleTasks.length > 1 && (
                    <Filter value={filter} onChangeFilter={this.changeFilter} />
                )}
                {visibleTasks.length > 0 && (
                    <TaskList
                        tasks={visibleTasks}
                        onRemoveTask={this.removeTask}
                        onUpdateTask={this.updateCompleted}
                    />
                )}
            </>
        );
    }
}
