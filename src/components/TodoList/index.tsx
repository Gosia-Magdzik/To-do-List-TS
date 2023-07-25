import { Wrapper, TodosWrapper, RemoveWrapper, Title } from "./styled";
import { Todo } from "../../model";
import { SingleToDo } from "../SingleToDo";
import { Droppable } from "react-beautiful-dnd";

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setcompletedTodos }: Props) => {
    return(
        <Wrapper>
            <Droppable droppableId="TodosRemove">
                {
                    (provided) => (
                        <TodosWrapper 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Title>Active Tasks</Title>
                            {todos.map((todo, index) => (
                                <SingleToDo 
                                    index={index}
                                    todo={todo} 
                                    key={todo.id} 
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            ))}
                            {provided.placeholder}
                        </TodosWrapper>
                    )
                }
            </Droppable>
            <Droppable droppableId="TodosList">
                {
                    (provided) => (
                        <RemoveWrapper 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Title>Complited Tasks</Title>
                            {completedTodos.map((todo, index) => (
                                <SingleToDo 
                                    index={index}
                                    todo={todo} 
                                    key={todo.id} 
                                    todos={completedTodos}
                                    setTodos={setcompletedTodos}
                                />
                            ))}
                        {provided.placeholder}
                        </RemoveWrapper>
                    )
                }
            </Droppable>
        </Wrapper>
    );
};