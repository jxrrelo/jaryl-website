import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Posts from './pages/posts/Posts';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path='/posts' component={<Posts />}/>
        </Switch>
      </div>     
    </BrowserRouter>
  );
};

export default Routes;