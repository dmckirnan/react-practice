import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchLayout from './SearchLayout.jsx';
import UserList from './UserList.jsx';
import WidgetList from './WidgetList.jsx';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div className="app">
      <header className="primary-header" />
      <aside className="primary-aside">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/widgets">Widgets</Link></li>
        </ul>
      </aside>
      <main>
        {this.props.children}
      </main>
    </div>
    );
  }
}

export default MainLayout;
