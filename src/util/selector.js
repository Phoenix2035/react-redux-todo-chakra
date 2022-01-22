import { TABS_FILTER } from "../constants"

export const getTodoByTabsFilter = (todo, tabsFilter) => {
    switch (tabsFilter) {
        case TABS_FILTER.COMPLETED:
            return todo.filter(item => item.completed)
        case TABS_FILTER.INCOMPLETE:
            return todo.filter(item => !item.completed)
        default:
            return todo
    }
}


