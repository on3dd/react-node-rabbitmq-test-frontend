import React from 'react';
import EventLog from './components/EventLog';
import './scss/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <EventLog />
      </div>
    );
  }
}

export default App;
