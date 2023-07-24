import React from "react";
import { Todo } from "../../model"
import { Wrapper, SingleText, Img } from "./styled";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleToDo = ({todo, todos, setTodos }:Props) => {
    return(
        <Wrapper>
            <SingleText>
                {todo.todo}
            </SingleText>
            <span>
                <AiFillEdit/>
            </span>
            <span>
                <AiFillDelete/>
            </span>
        </Wrapper>
    );
};