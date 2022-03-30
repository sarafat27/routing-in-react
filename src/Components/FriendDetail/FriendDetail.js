import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();
    return (
        <div>
            <h2>This is the detail of a friend {params.friendId}</h2>
        </div>
    );
};

export default FriendDetail;