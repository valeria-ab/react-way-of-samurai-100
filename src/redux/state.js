import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 15},
                {id: 1, message: 'It\'s my new post.', likesCount: 20}
            ],
            newPostText: 'it-incubator.com'

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Lera'},
                {id: 2, name: 'Nadya'},
                {id: 3, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: 'How ti'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'ku'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //паттерн. почитать
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}




export default store;
window.state = store //это для того чтобы можно было в консоли просто прописать state и он там отобразится