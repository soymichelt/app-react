import React, {useState, useEffect} from 'react';
import {PostList} from './post-list';

export const Posts = () => {
    const [on, setOn] = useState(!navigator ? null : navigator.onLine);
    const [posts, setPosts] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
    const handleNextClick = () => setUrl(next);
    const handlePrevClick = () => setUrl(prev);

    const handleConnectedChanged = () => {
        if(!navigator) setOn(null);
        setOn(navigator.onLine);
    };

    useEffect(() => {
        if(window) {
            window.addEventListener('online', handleConnectedChanged);
            window.addEventListener('offline', handleConnectedChanged);
        }

        const getPosts = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setPosts(data.results);
                setNext(data.info.next);
                setPrev(data.info.prev);
            }
            catch(e) {
                console.log(e);
            }
        };
        getPosts();

        return () => {
            if(window) {
                window.removeEventListener('online', handleConnectedChanged);
                window.removeEventListener('offline', handleConnectedChanged);
            }
        };
    }, [url]);

    return (
        <PostList
            data={posts}
            onNext={handleNextClick}
            onPrev={handlePrevClick}
            next={next}
            prev={prev}
            isOnline={on}
        />
    );
};