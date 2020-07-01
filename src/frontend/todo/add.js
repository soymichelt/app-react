import React from 'react';
import './add.scss';

const Add = (props) => {

<<<<<<< HEAD
    const {onAdd, onChange, tarea,} = props;
    return (
        <section>
            <label>Tarea</label>
            <input placeholder="Ingresar tarea" value={tarea} onChange={onChange} />
            <button onClick={() => onAdd(tarea) }>Añadir</button>
=======
    const {
        onAdd,
        onChange,
        tarea,
    } = props;

    return (
        <section className='section-add'>
            <label>Tarea nueva</label>
            <input
                placeholder='Ingresar tarea'
                onChange={onChange}
                value={tarea}
            />
            <button onClick={() => onAdd(tarea)}>Añadir</button>
>>>>>>> 652009ceead437c8be5d2e90715bbcae9c85343b
        </section>
    );

};

export default Add;