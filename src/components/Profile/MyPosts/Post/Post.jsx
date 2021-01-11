import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
                    <div className={styles.item}>
                        <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
                        {props.message}
                        <div>
                            <span>like {props.likeCounts}</span>
                        </div>
                    </div>
    )
}
export default Post;