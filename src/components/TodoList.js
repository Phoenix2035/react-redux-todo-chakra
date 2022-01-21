import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

import Todo from "./Todo"


const TodoList = () => {
    const todo = useSelector(state => state.todo.todo)


    return (
        <Box>
            {
                todo.length ?
                    todo.map(item => <Todo key={item.id} todo={item} />)
                    : <Box textAlign="center" my="4">No Todo's Yay!</Box>
            }
        </Box>
    )
};

export default TodoList;
