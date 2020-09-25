import React, { Component } from 'react';
import Navbar from './components/navbar';
import Content from './components/simplecontrol';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Row, Col} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
