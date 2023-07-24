import React from "react";
import { Todo } from "../../model"
import { Wrapper, SingleText, Img, SingleTextDone } from "./styled";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md"

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleToDo = ({todo, todos, setTodos }:Props) => {
    
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone } : todo
        ));
    };

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        );
    };
    
    return(
        <Wrapper>
                {
                    todo.isDone ? (
                    <SingleTextDone>
                        {todo.todo}
                    </SingleTextDone>
                    ) : (
                    <SingleText>
                        {todo.todo}
                    </SingleText>
                    )
                }
            <Img>
                <AiFillEdit/>
            </Img>
            <Img onClick={() => handleDelete(todo.id)}>
                <AiFillDelete/>
            </Img>
            <Img onClick={() => handleDone(todo.id)}>
                <MdOutlineDone/>
            </Img>
        </Wrapper>
    );
};