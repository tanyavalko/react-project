import React from 'react';
import s from'./Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='img'/>
        </header>
    );
}

export default Header;