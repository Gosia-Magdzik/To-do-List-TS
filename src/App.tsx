import React, { useState } from 'react';
import { Header, Wrapper } from './AppStyle';
import { Input }  from "./components/Input"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <Wrapper>
      <Header>TASKIFY</Header>
      <Input todo={todo} setTodo={setTodo} />
    </Wrapper>
  );
}

export default App;
