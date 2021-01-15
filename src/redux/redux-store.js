import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);
//автоматически createStore создаёт внутри себя state у которого есть
//св-ва которые указаны в reducers

export default store;
