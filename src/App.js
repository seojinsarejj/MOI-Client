import logo from './logo.svg';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import { Component } from 'react';

class App extends Component {

  state = {
    active:null,
  }

  handleNavItemClick = (id) => {
    console.log("click!");
    this.setState({ activeId : id });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="App">
        <Menu/>
        <Navbar active={active} onNavItemClick={this.handleNavItemClick}/>
      </div>
    );
  }
}

export default App;
