import React from 'react';
import { Header, Wrapper } from './AppStyle';
import { Input }  from "./components/Input"

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>TASKIFY</Header>
      <Input/>
    </Wrapper>
  );
}

export default App;
