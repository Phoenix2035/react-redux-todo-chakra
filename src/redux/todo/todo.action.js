import types from "./todo.types";


export const addTodo = todo => {
    return {
        type: types.ADD_TODO,
        payload: {
            id: new Date().getTime(),
            content: todo,
            completed: false
        }
    }
}

export const toggleTodo = id => {
    return {
        type: types.TOGGLE_TODO,
        payload: id
    }
}