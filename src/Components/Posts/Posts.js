import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setposts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setposts(data))

    }, []);

    return (
        <div>
            <h2>These are the posts of the users: {posts.length}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    posts.map(post => <Link
                        style={{ margin: '20px' }}
                        key={post.id}
                        to={`/posts/${post.id}`}
                    >{post.id}</Link>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;