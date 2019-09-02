import React, { Component } from 'react';
import { Header } from './Header';

class App extends Component {

  state = {
    data: ''
  }

  render() {

    return (
      <div className='container'>
        <Header />
       </div>
    );
  }

}

export default App;