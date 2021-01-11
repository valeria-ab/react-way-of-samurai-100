import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//настаивает данные из стэйта
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//настраивает колбэки, которые мы будем отправлять в презентационную компоненту
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
           dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
           dispatch(sendMessageCreator())
        }
    }
}

//контейнерная компонента
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;