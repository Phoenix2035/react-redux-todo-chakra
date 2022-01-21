import types from './todo.types'

const initial_state = {
    todo: []
}


const todoReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return { todo: [...state.todo, action.payload] }

        case types.TOGGLE_TODO:
            return {
                todo: state.todo.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)
            }

        default:
            return state;
    }
};


export default todoReducer