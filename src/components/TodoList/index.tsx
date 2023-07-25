import { Wrapper, TodosWrapper, RemoveWrapper, Title } from "./styled";
import { Todo } from "../../model";
import { SingleToDo } from "../SingleToDo";

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return(
        <Wrapper>
            <TodosWrapper>
                <Title>Active Tasks</Title>
                {todos.map(todo => (
                    <SingleToDo 
                        todo={todo} 
                        key={todo.id} 
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </TodosWrapper>
            <RemoveWrapper>
            <Title>Completed Tasks</Title>
                {todos.map(todo => (
                    <SingleToDo 
                        todo={todo} 
                        key={todo.id} 
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </RemoveWrapper>
        </Wrapper>
    );
};