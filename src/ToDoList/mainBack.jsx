import { useState } from "react";
import styles from "./mainBack.module.css";
import addIcon from "../assets/addicon.png";
import trashIcon from "../assets/trashicon.png";
import upArrow from "../assets/upicon2.png";
import downArrow from "../assets/downicon.png";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [taskAdd, setTaskAdd] = useState("");

    function handleInputChange(event) {
        setTaskAdd(event.target.value);
    }

    function addTask() {
        if (taskAdd.trim() !== "") {
            setTasks([...tasks, taskAdd]);
            setTaskAdd("");
        }
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={styles.full}>
            <div className={styles.navbar}>
                <h1 className={styles.todo}>ToDo</h1>
            </div>

            <div className={styles.add}>
                <textarea
                    className={styles.eventsample}
                    rows="1"
                    onChange={handleInputChange}
                    value={taskAdd}
                    placeholder="Enter Events Here"
                />
                <img src={addIcon} alt="Add Icon" className={styles.addIcon} onClick={addTask} />
            </div>

            <div className={styles.display}>
                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.taskOne}>
                            <span className={styles.taskContent}>{task}</span>
                            <div className={styles.iconContainer}>
                                <img src={upArrow} className={styles.uparrow} onClick={() => moveTaskUp(index)} />
                                <img src={downArrow} className={styles.downarrow} onClick={() => moveTaskDown(index)} />
                                <img src={trashIcon} className={styles.trashIcon2} onClick={() => removeTask(index)} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
