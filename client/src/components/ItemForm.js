import React, {useState, useEffect} from 'react';
import {Form, Checkbox} from 'semantic-ui-react';

const ItemForm = (...menus) => {
  const [state, setState] = useState({
    name: '',
    description: '',
    price: '', 
    available: 'true',
    menu_id: '',
  });


  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    console.log(state)
  };

  const handleSubmit = () => {

  };

  // const options = 

  //     [
  //       menus.map( m => (
  //         {key: m.id, name: m.name, value: m.name}
  //         ))
  //       ]
  //       debugger

  return(
    <>
      <h1>Create a new dish</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label='Dish Name'
          placeholder='Dish Name'
          name='name'
          required
          value={state.name}
          onChange={handleChange}
          width={5}
          />
        <Form.Input
          label='Price'
          placeholder='Price'
          name='price'
          required
          value={state.price}
          onChange={handleChange}
          width={5}
          />
        <Form.TextArea
          label='Description'
          placeholder='Description'
          name='description'
          required
          value={state.description}
          onChange={handleChange}
          width={5}
          />
        <Checkbox
          label='Available?'
          name='available'
          value={state.available}
          onChange={handleChange}
          default={true}
          />
        {/* <Form.Select
         label='Menu'
         options={options}
        /> */}
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  );
};

export default ItemForm