import React from 'react';
import './App.css';
import Header from './modules/header/components/header.component';
import Form from './modules/form/components/form.component'

const App = () => {
  return (
    <div className="App">
      <Header title="Instagram"></Header>
      <Form></Form>
    </div>
  );
}

export default App;
