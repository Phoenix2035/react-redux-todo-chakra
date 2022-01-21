import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import { toggleTodo } from "../redux/todo/todo.action";

const Todo = ({ todo }) => {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()


    const handleChecked = () => {
        dispatch(toggleTodo(todo.id))
    }

    useEffect(() => {
        setChecked(todo.completed)
    }, [todo])

    return (
        <Box my={3} p={2} bgColor="lightCoral">
            <Checkbox colorScheme="teal" isChecked={checked} onChange={handleChecked}>
                <Text as={todo.completed && "del"}>
                    {todo.content}
                </Text>
            </Checkbox>
        </Box>
    )
};

export default Todo;
