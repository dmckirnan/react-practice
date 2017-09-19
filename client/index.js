import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout.jsx';
import SearchLayout from './components/SearchLayout.jsx';
import Home from './components/Home.jsx';
import UserList from './components/UserList.jsx';
import WidgetList from './components/WidgetList.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widgets" component={WidgetList} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('root'));
