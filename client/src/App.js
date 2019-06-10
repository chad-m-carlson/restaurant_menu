import React, {Component, } from 'react';
import './App.css';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import axios from 'axios';
import { Container, Header,} from 'semantic-ui-react';

class App extends Component{
  state = {
    menus: [],
  };
  
  componentDidMount(){
    axios.get('/api/menus')
      .then( response => {
        this.setState({ menus: response.data, });
      })
      .catch( error => {
        console.log(error)
      })
  };

  addMenu = (name) => {
    axios.post(`/api/menus`, {name})
      .then( response => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, response.data], })
      })
  };

  updateMenu = () => {

  };

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( response => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter( m => m.id !== id), })
      })
  };
  
  render() {
    return (
      <Container>
        <Header as='h1'>Restaurant</Header>
        <MenuList 
          menus={this.state.menus}
          items={this.state.items}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
        <MenuForm add={this.addMenu}/>
      </Container>
    );
  };
};

export default App;
