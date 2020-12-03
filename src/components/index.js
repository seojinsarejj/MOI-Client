import logo from './logo.svg';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import Modal from './components/NavBar/modal';
import Login from './components/Login/Login';

class Index extends Component {

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
            <Menu/>
            <Navbar onClick={this.openCreateModal}/>
            <Modal visible={this.state.isCreateModalView} close={this.closeCreateModal}>Hello</Modal>
        </div>
      );
    }
  }
  
  export default Index;
  