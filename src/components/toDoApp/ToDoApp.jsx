import s from './TodoApp.module.css';
// import s from './Form.module.css'
import { useState } from 'react';


import Form from '../toDoApp/form/Form.jsx'
import ToDo from '../toDoApp/toDo/ToDo.jsx'


const ToDoApp = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy Orange", completed: false },
        { id: 2, title: "Make a Two Sandwich", completed: false },
        { id: 3, title: "Get a Taxi at 6p.m.", completed: false },
    ]);


    const handleDelete = (id) => {
        const filtredArr = tasks.filter((item) => item.id !== id);
        setTasks([...filtredArr]);
    };

    const handleEdit = (id, text) => {
        // console.log("----handleEdit----", id, text);
        const arr = tasks.map(item => item.id === id ? { ...item, title: text } : item);
        setTasks([...arr]);
    };
    

    // console.log(tasks);

    return (
        <div className={s.App}>
            <div className={s.innerApp}>
                <h2 className={s.titleApp}>What's the Plan for Today?</h2>
                <Form
                    setTasks={setTasks}
                    tasks={tasks} />

                <ul className={s.list}>
                    {tasks.map((task) => (
                        <ToDo key={task.id}  //чтобы пофиксить ошибку с "key" - корневому элементу добавляем key и присваиваем наш id
                            task={task}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default ToDoApp;