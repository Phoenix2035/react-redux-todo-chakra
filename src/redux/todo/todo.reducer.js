import types from './todo.types'

const initial_state = {
    todo: []
}


const todoReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return { todo: [...state.todo, action.payload] }
        default:
            return state;
    }
};



export default todoReducer