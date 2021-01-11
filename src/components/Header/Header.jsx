import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (

        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1164px-Logo_TV_2015.svg.png"
                alt="logj"
            />
        </header>
    )
}
export default Header;