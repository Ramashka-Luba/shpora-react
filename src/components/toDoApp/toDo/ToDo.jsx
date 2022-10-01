import s from './ToDo.module.css';
import { useState } from "react";
import Edit from "./../../../assets/ToDoImg/edit.png";
import Delete from "./../../../assets/ToDoImg/delete.png";
import Save from "./../../../assets/ToDoImg/save.png";
import InputEdit from '../inputEdit/InputEdit';


const ToDo = ({ task, handleDelete, handleEdit, tasks, setTasks }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(task.title);


    const handleComplete = () => {    // заваршина таска или нет 
        setTasks(tasks.map(item => {
            if (item.id === task.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    const toggle = () => {
        if (isEdit) {
            handleEdit(task.id, text);
        }
        setIsEdit(!isEdit);
    };


    const onKeyDown = e =>{ // сохранение по нажатию Enter
        if (e.key == 'Enter') { //e.keyCode == 13 -номер Enter
            toggle()}
            
        }

    return (
        <>
            <div className={task.id % 2 === 0 ? s.innerItem : s.innerItemBg}>
                <div  className={s.wrapLeft}>

                    <div className={s.checkbox}>
                        <input className={s.checkboxInput} type='checkbox' id={task.id} onClick={handleComplete} />
                        <label className={s.checkboxLabel} htmlFor={task.id}></label>
                    </div>

                    {isEdit
                        ? <InputEdit 
                            setText={setText}
                            text={text}
                            onKeyDown={onKeyDown}

                        />
                        : <div onClick={() => toggle()} className={task.completed && s.completed} >{task.title}</div>}
                </div>
                <div className={s.wrapRight}>
                    <button className={s.btnDelete} onClick={() => handleDelete(task.id)}>
                        <img src={Delete} alt="delete" />
                    </button>
                    <button className={s.btnEdit} onClick={() => toggle()}>
                        {isEdit ? <img src={Save} alt="save" /> : <img src={Edit} alt="edit" />}
                    </button>
                </div>
            </div>

        </>
    );
}

export default ToDo;