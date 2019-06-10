import React from 'react';
import MenuItems from './MenuItems';
import axios from 'axios';
import { Card,} from 'semantic-ui-react';


const MenuList = ({ menus, updateMenu, deleteMenu }) => {


  return(
    <div style={styles.menus}>
      { menus.map( m => 
      <Card key={m.id}>
        <Card.Header as="h2" key={m.id}>{m.name}</Card.Header>
        <MenuItems
        id={m.id}
        />
      </Card>
      )}
    </div>
  )
};

const styles = {
  menus: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
    alignItems: "center",
    textAlign: "center",
  }
}
export default MenuList;

