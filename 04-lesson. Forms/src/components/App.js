import React, { Component } from "react";
import Layout from "./Layout";

import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import createTask from "../utils/create-task";

class App extends Component {
    static defaultPops = {};
    static propTypes = {};

    state = {
        tasks: [],
    };

    addTask = () => {
        let task = createTask();
        console.log(task);

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

    render() {
        let { tasks } = this.state;

        return (
            <Layout>
                <TaskEditor onAddTask={this.addTask} />
                {tasks.length > 0 && (
                    <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
                )}
            </Layout>
        );
    }
}

export default App;
