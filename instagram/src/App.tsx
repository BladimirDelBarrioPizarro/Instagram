import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Container from '../src/modules/container/components/container.component'
import Registry from '../src/modules/registry/components/registry.component'
import Login from '../src/modules/login/components/login.components'

const App = () => {
  return (
    <Router> 
    <Container>
      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registry" component={Registry}></Route>
      </Switch>

    </Container>
    </Router>
  );
}

export default App;
