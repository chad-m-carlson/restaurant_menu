import React from 'react';
import MenuItems from './MenuItems';
// import axios from 'axios';
import { Card, Button, Icon} from 'semantic-ui-react';


const MenuList = ({ menus, updateMenu, deleteMenu }) => {

console.log(menus)
  return(
    <div style={styles.menuDisplay}>
      { menus.map( m => 
      <Card key={m.id}>
        <Card.Header as="h2" key={m.id}>{m.name}{' '}
        </Card.Header>
        <MenuItems
        id={m.id}
        menu={m}
        />
        <div style={styles.menuDisplay}>
        <p style={{fontSize: '12px', cursor: 'pointer'}} onClick={() => deleteMenu(m.id)}>Delete Menu
        </p> 
        <p style={{fontSize: '12px', cursor: 'pointer'}} onClick={() => updateMenu(m.id)}>Edit Menu
        </p>
        </div>
      </Card>
      )}
    </div>
  )
};

const styles = {
  menuDisplay: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
    textAlign: "center",
  }
}
export default MenuList;

