import React, { useState } from 'react';
import Add from './add';
import List from './list';

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
        <>
            <Add onAdd={addTarea} onChange={onChangeTarea} tarea={tareaNueva} />
            <List tareas={tareas} />
        </>
    );

};

export default Todo;