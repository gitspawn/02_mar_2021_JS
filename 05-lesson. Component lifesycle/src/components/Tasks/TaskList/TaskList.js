import React from "react";
import "./TaskList.css";

// {
//   id: uuidv4(),
//     text: loremIpsum(),
//       completed: false,
//   }

// export default function TaskList({ tasks, onremoveTask }) {
//   return (
//     <ul className="TaskList">
//       {tasks.map(({ id, text }) => (
//         <li className="TaskList-item" key={id}>
//           <p className="TaskList-text">{text}</p>
//           <section className="TaskList-actions">
//             <button
//               type="button"
//               className="TaskList-button"
//               // onClick={onremoveTask}
//               // onClick={() => console.log(id)}
//               onClick={() => onremoveTask(id)}
//             >
//               Delete task
//             </button>
//           </section>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Li как отдельный компонент
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text, completed }) => (
      <TaskListItem
        key={id}
        text={text}
        onRemove={() => onRemoveTask(id)}
        onUpdate={() => onUpdateTask(id)}
        // Добавить при получении данных от формы
        completed={completed}
      />
    ))}
  </ul>
);

export default TaskList;
