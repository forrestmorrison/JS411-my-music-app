import './App.css';
import Dashboard from './components/Dashboard';
import OnlineMode from './components/OnlineMode';
import SoundQuality from './components/SoundQuality';
import { Button } from '@material-ui/core';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>

              <Dashboard />
              <SoundQuality />
              <OnlineMode />

          </ol>
        </header>
      </div>
    );
  }
}

export default App;