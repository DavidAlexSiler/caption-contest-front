import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar'
import PlayContainer from './containers/PlayContainer';
import GalleryContainer from './containers/GalleryContainer';
import AboutContainer from './containers/AboutContainer'



function App() {
  return (
    <div className="App">
      <h1>The <s>Official</s> New Yorker Caption Contest.</h1>
      <NavBar />
      <Switch>
      <Route exact path='/about' component={AboutContainer}/>
      <Route exact path='/play' component={PlayContainer}/>
      <Route exact path='/gallery' component={GalleryContainer}/>
      </Switch>
    </div>
  );
}

export default App;
