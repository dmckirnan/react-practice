import React from 'react';
import UserList from './UserList.jsx';
import WidgetList from './WidgetList.jsx';

const SearchLayout = props => {
  return (
    <div class="search">
      <header class="search-header"></header>
      <div class="results">
        {props.children}
      </div>
      <div className="search-footer pagination"></div>
    </div>
  );
};

export default SearchLayout;
