import React, { useState } from 'react'
import style from "./BtnCreate.module.css";

const BtnCreate = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [task, setTask] = useState({ title: "", description: "" });

    return (
        <div className={style.btnCreate}>
            <button className={style.btnCreateTask} onClick={() => setIsOpen(!isOpen)}>
                Criar Tarefa
            </button>

            {isOpen && (
                <div className={style.boxCreateTask}>
                    <input
                        type="text"
                        placeholder="Título da tarefa"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Descrição da tarefa"
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                    />
                    <button className={style.btnCreateTask} onClick={() => console.log(task)}>Criar</button>
                </div>
            )}
        </div>
    )
}

export default BtnCreate