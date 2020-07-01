import React from 'react';

export const PostList = ({data}) => {
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