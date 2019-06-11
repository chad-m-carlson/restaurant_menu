import React, {Component} from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';
import { Header, Card, Checkbox} from 'semantic-ui-react';

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

  handleClick = (item) => {
    axios.put(`/api/menus/${this.props.id}item${item.id}`, {...item})
      .then (response => {
        const items = this.state.items.map( i => {
          if (i.id === item.id)
            return response.data;
          return i
        })
        this.setState({ items, });
        console.log(items)
      });
  };

  renderItems = () => {
    const {items} = this.state
    return (
      <>
        {items.map( i => 
          <div key={i.id}>
            <h4>{i.name}</h4>
            <p>{i.description}</p>
            <h6>{i.price}</h6>
            <Checkbox
              label='Available?'
              name='available'
              defaultChecked={i.available}
              onClick={() => this.handleClick(i)}
              default={true}
            />
          </div>)}
      </>
    );
  };
  
  render() {
    return(
      <div>
        {this.renderItems()}
      </div>
    )}; 
};

export default MenuItems;