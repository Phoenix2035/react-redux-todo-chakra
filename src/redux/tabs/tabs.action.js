import { SET_FILTER } from "./tabs.types"


export const setFilter = filter => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}