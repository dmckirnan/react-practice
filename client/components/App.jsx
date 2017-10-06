import React from 'react';
import Counter from '../containers/Counter.jsx';
import AddCounter from '../containers/AddCounter.jsx';
import RemoveCounter from '../containers/RemoveCounter.jsx';

const App = () => {
  return (
    <div className="container">
      <Counter /><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter />
        </div>
        <div className="column auto">
          <RemoveCounter />
        </div>
      </div>
      </div>
  );
}

export default App;
