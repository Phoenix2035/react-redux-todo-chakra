import { SET_FILTER } from './tabs.types'
import { TABS_FILTER } from "../../constants"

const initial_state = TABS_FILTER.ALL


const tabsReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload
        default:
            return state;
    }
};


export default tabsReducer