import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";

import { addTodo } from "../redux/todo/todo.action";

const AddTodo = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(value))
        inputRef.current.focus()
        setValue('')
    }



    return (
        <form>
            <Flex>
                <FormControl>
                    <Input type="text" value={value} onChange={e => setValue(e.target.value)} ref={inputRef} borderTopRightRadius={0} borderBottomRightRadius={0} />
                </FormControl>
                <Button colorScheme="teal" type="submit" onClick={handleSubmit} disabled={!value} borderTopLeftRadius={0} borderBottomLeftRadius={0} >
                    Add Todo
                </Button>
            </Flex>
        </form>
    )
};

export default AddTodo;
