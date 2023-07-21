import React, { useState } from 'react';
import { Header, Wrapper } from './AppStyle';
import { Input }  from "./components/Input"
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); //array of todos

const handleAdd = () => {};

  return (
    <Wrapper>
      <Header>TASKIFY</Header>
      <Input todo={todo} setTodo={setTodo} />
    </Wrapper>
  );
}

export default App;
