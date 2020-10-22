import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                followed: false,
                fullName: 'Anna',
                status: 'online',
                location: { city: 'Lviv', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                followed: true,
                fullName: 'Kate',
                status: 'offline',
                location: { city: 'Kiev', country: 'Ukraine' }
            },
        ])
    }
    
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt='' className={s.imgBlock} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}

export default Users;