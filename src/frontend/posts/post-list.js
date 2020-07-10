import React from 'react';

export const PostList = (props) => {
    const {data} = props;

    return (
        <ul>
            {data && data.map(item => {
                return (
                    <li key={item.id}>{item.name}</li>
                );
            })}
        </ul>
    );
};