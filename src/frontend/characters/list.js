import React from 'react';

export const List = (props) => {
    const {
        data,
        onNext,
        onPrev,
        next,
        prev,
        connected,
    } = props;
    return(
        <>
            <ul>
                {data && data.map(item => {
                    return (<li key={item.id}>{item.name}</li>);
                })}
            </ul>
            <button
                disabled={prev === null ? true : false}
                onClick={onPrev}
            >
                Anterior
            </button>
            <button
                disabled={next === null ? true : false}
                onClick={onNext}
            >
                Siguiente
            </button>
            {connected !== null && (
                <p>{connected === true ? 'Online' : 'Offline'}</p>
            )}
        </>
    );
};