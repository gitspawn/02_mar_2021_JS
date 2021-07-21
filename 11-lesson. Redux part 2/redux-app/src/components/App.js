import React, { Component } from "react";
import Layout from "./Layout";

import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import Filter from "../components/Filter";

// class App extends Component {
//     static defaultPops = {};
//     static propTypes = {};

//     render() {
//         return (
//             <Layout>
//                 <TaskEditor />
//                 <Filter />
//                 <TaskList />
//             </Layout>
//         );
//     }
// }
// export default App;

function App() {
    return (
        <Layout>
            <TaskEditor />
            <Filter />
            <TaskList />
        </Layout>
    );
}
export default App;

// # Шаги

// -   Создать store
// -   Обернуть все в Provider и передать ему store
// -   Продумать структуру state
// -   Создать типы действий
// -   Создать действия (action creators)
// -   Создать reducers
// -   Подключить компоненты с connect(mapState, mapDispatch)(BaseComponent)
