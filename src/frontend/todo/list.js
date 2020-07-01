import React from 'react';

const List = (props) => {

    const {tareas} = props;

    return (
        <section>
            <h5>Listado de tareas</h5>
            {tareas && (
                tareas.map((tarea, index) => <p key={index}>
                    {tarea}
                </p>)
            )}
        </section>
    );

};

export default List;