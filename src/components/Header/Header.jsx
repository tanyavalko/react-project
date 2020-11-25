import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='img'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to='/login' activeClassName={s.active}>Login</NavLink>
                } 
            </div>
        </header>
    );
}

export default Header;