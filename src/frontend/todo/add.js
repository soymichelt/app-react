import React from 'react';

const Add = (props) => {

    const {onAdd, onChange, tarea,} = props;
    return (
        <section>
            <label>Tarea</label>
            <input placeholder="Ingresar tarea" value={tarea} onChange={onChange} />
            <button onClick={() => onAdd(tarea) }>Añadir</button>
        </section>
    );

};

export default Add;