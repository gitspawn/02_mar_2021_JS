import React, { Component } from "react";
import Layout from "./Layout";
// import Counter from "./Counter";
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
        // console.log("Remove Task");
        // console.log(taskId);
        // console.log(text);

        this.setState((prevState, props) => {
            // return {
            //     tasks: prevState.tasks.filter((task) => {
            //         return task.id !== taskId;
            //     }),
            // };

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

// function App() {
//     return (
//         <Layout>
//             {/* <Counter initialValue={0} step={1} /> */}//             {/* <Counter /> */}
//             //         </Layout>
//     );
// }

export default App;
