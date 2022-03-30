import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate()
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        //or, const path = '/friends/' + id;
        navigate(path)
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}>Show detail</Link>
            <button onClick={showFriendDetail}>{username}: {id}</button>
        </div>
    );
};

export default Friend;