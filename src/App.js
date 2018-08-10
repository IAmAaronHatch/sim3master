import React, { Component } from 'react';
import './App.css';

//components 
import Auth from './components/Auth'
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth/>
        <Dashboard/>
        <Form/>
        <Post/>
      </div>
    );
  }
}

export default App;
