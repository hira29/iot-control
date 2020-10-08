import React, { Component } from 'react';
import Navbar from './components/navbar';
import Content from './components/simplecontrol';

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
