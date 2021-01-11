const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:   return state
        }

    }

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;