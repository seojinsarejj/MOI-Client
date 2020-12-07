import { BrowserRouter, Route } from 'react-router-dom';
import { Main, Home } from './components';
import { Component } from 'react';

class App extends Component {

  state = {
    isCreateModalView : false,
  }

  openCreateModal = () => {       
    this.setState({ isCreateModalView: true });
    }

  closeCreateModal = () => {
    this.setState({ isCreateModalView: false });
  }


  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Main} />
          <Route path='/home' component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
