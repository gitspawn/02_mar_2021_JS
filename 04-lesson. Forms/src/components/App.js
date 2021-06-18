import React, { Component } from "react";
import Layout from "./Layout";

import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import Filter from "../components/Filter";
import createTask from "../utils/create-task";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
    static defaultPops = {};
    static propTypes = {};

    state = {
        tasks: [],
        filter: "",
    };

    addTask = (text) => {
        let task = {
            id: uuidv4(),
            text,
            completed: false,
        };

        this.setState((prevState, props) => {
            return {
                tasks: [...prevState.tasks, task],
            };
        });
    };

    removeTask = (taskId, text) => {
        this.setState((prevState, props) => {
            return { tasks: prevState.tasks.filter(({ id }) => id !== taskId) };
        });
    };

    // updateCopleted = (taskId) => {
    //     this.setState((prevState) => {
    //         return {
    //             tasks: prevState.tasks.map((task) => {
    //                 if (task.id === taskId) {
    //                     return {
    //                         ...task,
    //                         completed: !task.completed,
    //                     };
    //                 }

    //                 return task;
    //             }),
    //         };
    //     });
    // };

    updateCopleted = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            ),
        }));
    };

    changeFilter = (filter) => {
        console.log(filter);
        this.setState({ filter });
    };

    getVisibleTasks = () => {
        let { tasks, filter } = this.state;
        return tasks.filter((task) => task.text.includes(filter));
    };

    render() {
        let { tasks, filter } = this.state;
        let visbleTasks = this.getVisibleTasks();

        return (
            <Layout>
                <TaskEditor onAddTask={this.addTask} />
                {visbleTasks.length > 1 && (
                    <Filter value={filter} onChangeFilter={this.changeFilter} />
                )}
                {tasks.length > 0 && (
                    <TaskList
                        // tasks={tasks}
                        tasks={visbleTasks}
                        onRemoveTask={this.removeTask}
                        onUpdateTask={this.updateCopleted}
                    />
                )}
            </Layout>
        );
    }
}

export default App;
