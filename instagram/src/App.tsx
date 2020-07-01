import React from 'react';
import Card from '../src/modules/card/components/card.component'
import Container from '../src/modules/container/components/container.component'
import Input from '../src/modules/input/components/input.component'
import Button from '../src/modules/button/components/button.component'


const App = () => {
  return (
    <Container>
      <Card/>
      <Input placeholder='Email' label="Email"></Input>
      <Input placeholder='Password' label="Password"></Input>
      <Button></Button>
    </Container>
  );
}

export default App;
