import { Container, Heading } from "@chakra-ui/react"
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TabsFilter from "./components/TabsFilter";

function App() {
    return (
        <Container maxW="container.sm">
            <Heading my="4">
                Todo
            </Heading>
            <AddTodo />
            <TodoList />
            <TabsFilter />
        </Container>
    );
}

export default App;
