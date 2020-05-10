import React from 'react';
import './list.scss';

const List = (props) => {

    const {
        tareas,
    } = props;

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