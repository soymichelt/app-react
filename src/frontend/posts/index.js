import React, {useState, useEffect} from 'react';
import {PostList} from './post-list';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character/');
                const data = await res.json();
                setPosts(data.results);
            }
            catch(e) {
                console.log(e);
            }
        };
        getPosts();
    }, []);

    return (
        <PostList data={posts} />
    );
};