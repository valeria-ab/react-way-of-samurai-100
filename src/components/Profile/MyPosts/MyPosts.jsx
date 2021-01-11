import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
       props.updateNewPostText(text);
    }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                {/* <button>Remove</button>*/}


            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>

    )
}
export default MyPosts;