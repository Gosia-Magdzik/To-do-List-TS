import React, { useRef } from 'react';
import { Form, InputField, Button } from "./styled"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void; //f. does not return anything
}

export const Input: React.FC<Props> = ({todo, setTodo, handleAdd} : Props) => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Form onSubmit={(Event) => {
            handleAdd(Event)
            inputRef.current?.blur()
            }}>
            <InputField
                ref={inputRef}
                type='input'
                value={todo}
                onChange={
                    (e)=>setTodo(e.target.value) //e. event obiekt zdarzenia
                }
                placeholder='Enter a task'
            />
            <Button
                type='submit'
            >
                Go
            </Button>
        </Form>
    )
}