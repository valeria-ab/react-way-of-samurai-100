import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
        <div>
            <img src="https://im0-tub-ru.yandex.net/i?id=94c19fabc812f4298f7b613f5b971cf9&n=13"
                 alt=""/>
        </div>
    <div className={styles.descriptionBlock}>
        ava+description
    </div>
        </div>
    )
}
export default ProfileInfo;