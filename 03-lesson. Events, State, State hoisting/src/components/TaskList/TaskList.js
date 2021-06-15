import React from "react";
import "./TaskList.css";
import TaskListItem from "../TaskListItem";

// export default function TaskList({ tsks, onRemoveTask }) {
//     console.log(tasks);
//     return (
//         <ul className="TaskList">
//             {tasks.map(({ id, text }) => (
//                 <li key={id} className="TaskList-item">
//                     <p className="TaskList-text">{text}</p>
//                     <section className="TaskList-actions">
//                         <button
//                             onClick={() => onRemoveTask(id, "qwe")}
//                             className="TaskList-button"
//                         >
//                             Delete task
//                         </button>
//                     </section>
//                 </li>
//             ))}
//         </ul>
//     );
// }

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

// {
//   id: '124qw3klrwjerf2jorw3ior',
//   text: 'lorem ipdsrefsdf',
//   completed: false
// }
