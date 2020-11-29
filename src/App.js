import logo from './logo.svg';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import { Component } from 'react';

class App extends Component {


  render() {
    
    return (
      <div className="App">
        <Menu/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
