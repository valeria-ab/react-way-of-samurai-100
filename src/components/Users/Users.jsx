import React from 'react';
import styles from './users.module.css';
let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://argumenti.ru/images/arhnews/583332.jpg',
                followed: true,
                fullName: 'Valeria',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://argumenti.ru/images/arhnews/583332.jpg',
                followed: false,
                fullName: 'Alex',
                status: 'I am a boss too',
                location: {city: 'Oslo', country: 'Norway'}
            },
            {
                id: 3,
                photoUrl: 'https://argumenti.ru/images/arhnews/583332.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Smolensk', country: 'Russia'}
            }
        ])
    }



    return <div>
        {
            props.users.map(u => (<div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id)}}>Follow</button>
                            : <button onClick={() => { props.follow(u.id)}}>Unfollow</button>}
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
            </div>)
            )
        }
    </div>
}
export default Users;