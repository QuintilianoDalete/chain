import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

const SignUpForm = () => (
  <Form size='large'>
    <Segment stacked>
      <Form.Input fluid placeholder='User Name' />
      <Form.Input fluid placeholder='E-mail address' />
      <Form.Input fluid placeholder='Password' type='password' />
      <Button color='teal' fluid size='large'>
        Register
      </Button>
    </Segment>
  </Form>
);

export default SignUpForm;
