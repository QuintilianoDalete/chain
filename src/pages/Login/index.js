import React from 'react';
import { Grid } from 'semantic-ui-react'
import { LoginForm, CustomMessage, CustomHeader } from '../../components';

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <CustomHeader message="Log-in to your account" />
      <CustomMessage>
        New to us? <a href='#'>Sign Up</a>
      </CustomMessage>
    </Grid.Column>
  </Grid>
);

export default Login;
