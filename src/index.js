import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Book} from './container/Book';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Book/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// imageUrl
// title
// author
// description