import { createStore } from 'redux'
import ToDoListReducer from './Reducers/TodoList';

const initialState = {
    data: [],
    // inputValue: ''
}

const store = createStore(ToDoListReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;