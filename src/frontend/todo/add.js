import React from 'react';
import './add.scss';

const Add = (props) => {

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
        </section>
    );

};

export default Add;