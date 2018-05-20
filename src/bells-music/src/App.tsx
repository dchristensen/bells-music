import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SongPage from './SongPage';
import SongIndex from './SongIndex';
import './App.css';

const root = process.env.NODE_ENV === 'production' ? '/bells' : '.';
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter basename={root}>
          <Switch>
            <Route path="/" exact={true} component={SongIndex} />
            <Route path="/song/:name" component={SongPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
