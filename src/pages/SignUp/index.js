import React from 'react';
import { Grid } from 'semantic-ui-react'
import { CustomMessage, CustomHeader, SignUpForm } from '../../components';

const SignUp = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <CustomHeader message="Log-in to your account" />
      <SignUpForm />
      <CustomMessage>
        Already have an acount? <a href='#'>Sign In</a>
      </CustomMessage>
    </Grid.Column>
  </Grid>
);

export default SignUp;
