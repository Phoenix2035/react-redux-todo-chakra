import { useState } from "react";
import { Box, Checkbox, Text } from "@chakra-ui/react";

const Todo = ({ todo }) => {
    const [checked, setChecked] = useState(false)
    return (
        <Box my={3} p={2} bgColor="lightCoral">
            <Checkbox colorScheme="teal" isChecked={checked} onChange={e => setChecked(!checked)}>
                <Text as={todo.completed && "del"}>
                    {todo.content}
                </Text>
            </Checkbox>
        </Box>
    )
};

export default Todo;
