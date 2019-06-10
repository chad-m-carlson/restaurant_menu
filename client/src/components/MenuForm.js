import React, {useState} from 'react';
import {Form, } from 'semantic-ui-react';

const MenuForm = (props) => {
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(name);
    setName('');
  };

  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
  };

  return (
    <>
      <h1>Create A New Menu</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          width={5}
          label="Menu Name"
          value={name}
          onChange={handleChange}
        />

      </Form>
    </>
    )
};

export default MenuForm;