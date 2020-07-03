import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registry from '../src/modules/registry/components/registry.component'
import Login from '../src/modules/login/components/login.components'
import NewsFeed from '../src/modules/newsfeed/components/newsfeed.component'
import Profile from '../src/modules/profile/components/profile.component'

const App = () => {
  return (
    <Router> 
    
      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registry" component={Registry}></Route>
        <Route exact path="/newsfeed" component={NewsFeed}></Route>
        <Route exact path='/profile' component={Profile}></Route>
      </Switch>

  
    </Router>
  );
}

export default App;
