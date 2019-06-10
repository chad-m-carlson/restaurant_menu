import React, {Component} from 'react';
import axios from 'axios';
import { Header, Card } from 'semantic-ui-react';

class MenuItems extends Component {
  state = {
    items: []
  };

  componentDidMount(){
    axios.get(`/api/menus/${this.props.id}/items`)
      .then( response => {
        this.setState({items: response.data})
      })
      .catch( err=> {
        console.log(err);
      });
  };

  renderItems = () => {
    const {items} = this.state
    return (
      items.map(i => 
        <div key={i.id}>
          <h4>{i.name}</h4>
          <p>{i.description}</p>
          <h6>{i.price}</h6>
        </div>
    ));
  };
  
  render() {
    return(
      <div>
        {this.renderItems()}
      </div>
    )}; 
};

export default MenuItems;