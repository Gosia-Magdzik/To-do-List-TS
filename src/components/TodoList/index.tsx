import { Wrapper, List } from "./styled";
import { Todo } from "../../model";
import { SingleToDo } from "../SingleToDo";

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return(
        <Wrapper>
            {todos.map(todo => (
                <SingleToDo 
                    todo={todo} 
                    key={todo.id} 
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </Wrapper>
    );
};