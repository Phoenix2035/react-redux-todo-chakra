import { combineReducers } from 'redux';
import todo from './todo/todo.reducer';
import tabs from "./tabs/tabs.reducer"


export default combineReducers({
    todo,
    tabs
})