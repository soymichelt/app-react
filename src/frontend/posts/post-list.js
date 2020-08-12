import React from 'react';

export const PostList = (props) => {
    const {
        data,
        onNext,
        onPrev,
        next,
        prev,
        isOnline
    } = props;

    return (
        <>
            <h1 className='header-title'>Listado de Datos</h1>
            <ul id='list' >
                {data && data.map(item => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    );
                })}
            </ul>
            <button disabled={prev === null ? true : false} onClick={onPrev}>Anterior</button>
            <button disabled={next === null ? true : false} onClick={onNext}>Siguiente</button>
            {isOnline !== null && (
                <p>{isOnline === true ? 'Online' : 'Offline'}</p>
            )}
        </>
    );
};