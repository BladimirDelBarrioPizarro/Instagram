import React from 'react';
//import Header from './modules/header/components/header.component';
//import Form from './modules/form/components/form.component'
/**<Header title="Instagram"></Header> 
      <Form></Form> */
import Card from '../src/modules/card/components/card.component'
import Container from '../src/modules/container/components/container.component'
import Input from '../src/modules/input/components/input.component'

const App = () => {
  return (
    <Container>
      <Card></Card>
      <Input placeholder='Email' label="Email"></Input>
      <Input placeholder='Password' label="Password"></Input>
    </Container>
  );
}

export default App;
