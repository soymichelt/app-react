import React, {useEffect, useRef} from 'react';
import {useScreenHook} from './useScreenHook';
import {useDataProvider,LOADING} from './useDataProvider';
import {List} from './list';

const mergeData = (data, newData) => {
    if(newData) {
        const elementsToAdd = newData.filter(newItem => {
            const elementSearched = data.find(item => {
                return item.id === newItem.id
            });
            return !elementSearched;
        });
        return [
            ...data,
            ...elementsToAdd,
        ];
    }
    else {
        return [
            ...data
        ];
    }
};

export const InfinityScroll = () => {
    const elementToObserveRef = useRef();
    const [isShowing] = useScreenHook(elementToObserveRef, '0px');
    const [state, loading] = useDataProvider();
    const {
        statusData,
        data,
        error,
    } = state;
    const charactersRef = useRef([]);
    const {results, info} = data ? data : {};
    charactersRef.current = mergeData(charactersRef.current,results);
    useEffect(() => {
        if(isShowing && statusData !== LOADING) {
            if(info.next) loading(info.next);
        };
    },[isShowing]);
    return (
        <List
            status={statusData}
            charactersData={charactersRef.current}
            error={error}
            elementToObserveRef={elementToObserveRef}
        />
    );

};