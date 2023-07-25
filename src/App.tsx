import React, { useState } from 'react';
import { Header, Wrapper } from './AppStyle';
import { Input }  from "./components/Input"
import { Todo } from './model';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); //array of todos
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([])

const handleAdd = (event: React.FormEvent) => {
  event.preventDefault();

  if(todo) {
    setTodos([...todos, { id: Date.now(),
                          todo: todo,
                          isDone: false //by default
                        }]);
                        setTodo("")
  }
};

  return (
    <Wrapper>
      <Header>TASKIFY</Header>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setcompletedTodos={setcompletedTodos}
      />    
    </Wrapper>
  );
}

export default App;
