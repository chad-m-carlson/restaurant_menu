import React from 'react';
import MenuItems from './MenuItems';
// import axios from 'axios';
import { Card, Button, Icon} from 'semantic-ui-react';


const MenuList = ({ menus, updateMenu, deleteMenu }) => {


  return(
    <div style={styles.menus}>
      { menus.map( m => 
      <Card key={m.id}>
        <Card.Header as="h2" key={m.id}>{m.name}{' '}
        <Button icon basic color='red' size='mini'  onClick={() => deleteMenu(m.id)}>
          <Icon name='trash'/>
        </Button>
        </Card.Header>
        <MenuItems
        id={m.id}
        menu={m}
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
    textAlign: "center",
  }
}
export default MenuList;

