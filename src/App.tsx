import React, { useState } from 'react';
import { Header, Wrapper } from './AppStyle';
import { Input }  from "./components/Input"
import { Todo } from './model';
import { TodoList } from './components/TodoList';
import { DragDropContext, DropResult } from "react-beautiful-dnd"


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); //array of todos
  const [completedTodos, setcompletedTodos] = useState<Array<Todo>>([]);

const handleAdd = (event: React.FormEvent) => {
  event.preventDefault();

  if(todo) {
    setTodos([...todos, { id: Date.now(),
                          todo: todo,
                          isDone: false //by default
                        }]);
                        setTodo("");
  }
};

const onDragEnd = (result:DropResult) => {
  const { destination, source } = result;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId && 
    destination.index === source.index ) {
      return;
    }
    

  let add;
  let active = todos;
  let complete = completedTodos;

  if (source.droppableId === "TodosList") {
    add= active[source.index]; //and then... remove
    active.splice(source.index, 1);
  } else { 
    add = complete[source.index]; 
    complete.splice(source.index, 1);
  }

  if (destination.droppableId === "TodosList") {
    active.splice(destination.index, 0, add); //don't remove anything
  } else { 
    complete.splice(destination.index, 0, add); 
  }

  setcompletedTodos(complete);
  setTodos(active);
};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
}

export default App;
