import classNames from "classnames";
import { useStore } from "../store";
import "./Task.css";
import trash from "../assets/trash-2.svg";

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const draggedTask = useStore((store) => store.draggedTask); //store becomes store.setdraggedtask
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div>
          <img src={trash} alt="trash" onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
