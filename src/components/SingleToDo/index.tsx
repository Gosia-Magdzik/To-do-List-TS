import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../../model"
import { Wrapper, SingleText, Img, SingleTextDone, Input } from "./styled";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md"

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleToDo = ({todo, todos, setTodos }:Props) => {
    
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)


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

    const handleEdit = (Event: React.FormEvent, id: number) => {
        Event.preventDefault();

        setTodos(
            todos.map((todo) => (todo.id === id? {...todo, todo:editTodo} : todo
            ))
        );
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return(
        <Wrapper onSubmit={(Event) => handleEdit(Event, todo.id)} >
                {   
                    edit ? (
                        <Input 
                            ref={inputRef}
                            value={editTodo}
                            onChange={(Event) => setEditTodo(Event.target.value)}
                        />
                    ) : (
                    todo.isDone ? (
                        <SingleTextDone>
                            {todo.todo}
                        </SingleTextDone>
                        ) : (
                        <SingleText>
                            {todo.todo}
                        </SingleText>
                        ))
                }

            <Img onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit)
                };
            }}>
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