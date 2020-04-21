import React from 'react';
import './post.scss';

const Post = (props) => {

    const { name, date, avatarUrl, imageUrl, } = props;

    return (
        <div className='post'>
            <div className='post-header'>
                <img className='avatar' src={avatarUrl} />
                <h1 className='header'>
                    <span className='name'>{name}</span>
                    <span className='date'>{date}</span>
                </h1>
            </div>
            <img className='image' src={imageUrl} />
            <footer className='post-footer'>
                <button className='post-action'>Like</button>
                <button className='post-action'>Compartir</button>
                <button className='post-action'>Denunciar</button>
            </footer>
        </div>
    );

};

export default Post;