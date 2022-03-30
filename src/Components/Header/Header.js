import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>welcome to my routing website</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;