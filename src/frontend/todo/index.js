<<<<<<< HEAD
import React, { Fragment, useState } from 'react';
=======
import React, { useState, Fragment, } from 'react';
>>>>>>> 652009ceead437c8be5d2e90715bbcae9c85343b
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
<<<<<<< HEAD
        <Fragment>
            <Add onAdd={addTarea} onChange={onChangeTarea} tarea={tareaNueva} />
            <List tareas={tareas} />
        </Fragment>
=======
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
>>>>>>> 652009ceead437c8be5d2e90715bbcae9c85343b
    );
};

export default Todo;