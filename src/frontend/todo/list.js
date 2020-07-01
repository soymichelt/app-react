import React from 'react';
import './list.scss';

const List = (props) => {

<<<<<<< HEAD
    const {tareas} = props;
=======
    const {
        tareas,
    } = props;
>>>>>>> 652009ceead437c8be5d2e90715bbcae9c85343b

    return (
        <section className='section-list'>
            <h5>Listado de tareas</h5>
            {
                tareas && (
                    tareas.map((tarea, index) => {
                        return (
                            <p key={index}>{tarea}</p>
                        );
                    })
                )
            }
        </section>
    );

};

export default List;