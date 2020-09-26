import React from 'react';
import {
    LOADING,
    ERROR,
} from './useDataProvider';
import {Item} from './item';
import './list.styles.css';

export const List = (props) => {
    const {
        status,
        charactersData,
        error,
        elementToObserveRef,
    } = props;
    return (
        <section className='characters-list'>
            {status === LOADING && (
                <p>Cargando...</p>
            )}
            {status === ERROR && (
                <p>{error.message}</p>
            )}
            {charactersData && charactersData.map(character => {
                return (
                    <Item
                        key={character.id}
                        image={character.image}
                        name={character.name}
                        species={character.species}
                    />
                );
            })}
            <section ref={elementToObserveRef} className='loading'>
                <p>Cargando datos...</p>
            </section>
        </section>
    );
};