import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

import Todo from "./Todo"
import { getTodoByTabsFilter } from "../util/selector";


const TodoList = () => {
    const todo = useSelector(state => state.todo.todo)
    const tabs = useSelector(state => state.tabs)

    const filterTodos = getTodoByTabsFilter(todo, tabs)

    return (
        <Box>
            {
                filterTodos.length ?
                    filterTodos.map(item => <Todo key={item.id} todo={item} />)
                    : <Box textAlign="center" my="4">No Todo's Yay!</Box>
            }
        </Box>
    )
};

export default TodoList;
