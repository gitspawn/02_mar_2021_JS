// const [state, dispatch] = useReducer(reducer, initialArg, init);

import React, { Component, useState, useMemo, useReducer } from "react";
import { LoremIpsum } from "lorem-ipsum";
import shortid from "shortid";

const lorem = new LoremIpsum();

let todoReducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return [...state, action.payload.todo];

        case "removeTodo":
            return state.filter((todo) => todo.id !== action.payload.todoId);

        default:
            return state;
    }
};

export default function Todos() {
    // let [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(todoReducer, []);

    let addTodo = () => {
        const todo = {
            id: shortid.generate(),
            text: lorem.generateWords(3),
        };

        dispatch({ type: "addTodo", payload: { todo } });
    };

    let removeTodo = (todoId) => {
        dispatch({ type: "removeTodo", payload: { todoId } });
    };

    let [filter, setFilter] = useState("");

    let changeFilter = (event) => {
        setFilter(event.target.value);
    };

    let filteredTodos = useMemo(() => {
        let data = todos.filter((todo) => todo.text.includes(filter));
        return data;
    }, [todos, filter]);

    let [text, setText] = useState("");

    return (
        <>
            <label>
                Text
                <input
                    type="text"
                    onChange={(evt) => setText(event.target.value)}
                    value={text}
                />
            </label>
            <br />
            <label>
                Filter
                <input type="text" onChange={changeFilter} value={filter} />
            </label>

            <br />
            <button onClick={addTodo}>Add todo</button>

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

// Без редьюсера
// export default function Todos() {
//     let [todos, setTodos] = useState([]);

//     let addTodo = () => {
//         const todo = {
//             id: shortid.generate(),
//             text: lorem.generateWords(3),
//         };

//         setTodos((prevTodos) => [...todos, todo]);
//     };

//     let removeTodo = (todoId) => {
//         return setTodos(todos.filter((todo) => todo.id !== todoId));
//     };

//     let [filter, setFilter] = useState("");

//     let changeFilter = (event) => {
//         setFilter(event.target.value);
//     };

//     let filteredTodos = useMemo(() => {
//         let data = todos.filter((todo) => todo.text.includes(filter));
//         return data;
//     }, [todos, filter]);

//     return (
//         <>
//             <input type="text" onChange={changeFilter} value={filter} />

//             <br />
//             <button onClick={addTodo}>Add todo</button>

//             <ul>
//                 {filteredTodos.map((todo) => (
//                     <li key={todo.id}>
//                         <span>{todo.text}</span>
//                         <button onClick={() => removeTodo(todo.id)}>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export default class Todos extends Component {
//     state = {
//         todos: [],
//         filter: "",
//     };

//     addTodo = () => {
//         const todo = {
//             id: shortid.generate(),
//             text: lorem.generateWords(3),
//         };

//         this.setState((state) => ({
//             todos: [...state.todos, todo],
//         }));
//     };

//     removeTodo = (todoId) => {
//         this.setState((state) => ({
//             todos: state.todos.filter((todo) => todo.id !== todoId),
//         }));
//     };

//     changeFilter = (evt) => {
//         this.setState({ filter: evt.target.value });
//     };

//     render() {
//         const filteredTodos = this.state.todos.filter((todo) =>
//             todo.text.includes(this.state.filter)
//         );

//         return (
//             <>
//                 <input
//                     type="text"
//                     onChange={this.changeFilter}
//                     value={this.state.filter}
//                 />

//                 <br />
//                 <button onClick={this.addTodo}>Add todo</button>

//                 <ul>
//                     {filteredTodos.map((todo) => (
//                         <li key={todo.id}>
//                             <span>{todo.text}</span>
//                             <button onClick={() => this.removeTodo(todo.id)}>
//                                 Remove
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </>
//         );
//     }
// }
