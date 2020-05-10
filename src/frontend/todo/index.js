import React, { useState, Fragment, } from 'react';
import Add from './add';
import List from './list';
import './index.scss';

const Todo = () => {

    const [tareas, setTareas] = useState([]);

    const [tareaNueva, setTareaNueva] = useState('');

    const addTarea = (tarea) => {
        tareas.push(tarea);
        setTareas(tareas);
        setTareaNueva('');
    };

    const onChangeTarea = (e) => {
        setTareaNueva(e.target.value);
    };

    return (
        <section className='section-main'>
            <Add
                onAdd={addTarea}
                onChange={onChangeTarea}
                tarea={tareaNueva}
            />
            <List
                tareas={tareas}
            />
        </section>
    );
};

export default Todo;