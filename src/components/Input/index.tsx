import React from 'react';
import { Form, InputField, Button } from "./styled"

export const Input = () => {
    return (
        <Form>
            <InputField
                type='input'
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