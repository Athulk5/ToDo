import { useState } from "react";
import styles from "./mainBack.module.css";

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
        const taskElement = document.getElementById(`task-${index}`);
        taskElement.classList.add(styles.fadeOut);
        setTimeout(() => {
            setTasks(tasks.filter((_, i) => i !== index));
        }, 500);
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
            {/* Navbar */}
            <div className={styles.navbar}>
                <h1 className={styles.todo}>ToDo</h1>
            </div>

            {/* Input Section */}
            <div className={styles.add}>
                <textarea
                    className={styles.eventsample}
                    rows="1"
                    onChange={handleInputChange}
                    value={taskAdd}
                    placeholder="Enter Events Here"
                    onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                />
                <img 
                    src="/src/assets/addicon.png" 
                    alt="Add Icon" 
                    className={styles.addIcon} 
                    onClick={addTask} 
                />
            </div>

            {/* Task Display Section */}
            <div className={styles.display}>
                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} id={`task-${index}`} className={styles.taskOne}>
                            {/* Task text with proper wrapping */}
                            <span className={styles.taskContent}>{task}</span>

                            {/* Icon Container for Spacing */}
                            <div className={styles.iconContainer}>
                                <img
                                    src="/src/assets/upicon2.png"
                                    alt="Move Up"
                                    className={styles.uparrow}
                                    onClick={() => moveTaskUp(index)}
                                />
                                <img
                                    src="/src/assets/downicon.png"
                                    alt="Move Down"
                                    className={styles.downarrow}
                                    onClick={() => moveTaskDown(index)}
                                />
                                <img
                                    src="/src/assets/trashicon.png"
                                    alt="Delete"
                                    className={styles.trashIcon2}
                                    onClick={() => removeTask(index)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
