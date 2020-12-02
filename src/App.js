import logo from './logo.svg';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import Modal from './components/NavBar/modal';
import { Component } from 'react';

class App extends Component {


  render() {
    
    return (
      <div className="App">
        <Menu/>
        <Navbar/>
        <Modal visible={true}>Hello</Modal>

      </div>
    );
  }
}

export default App;
