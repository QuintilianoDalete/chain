import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CustomMessage, CustomHeader, SignUpForm } from '../../components';

const SignUp = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <CustomHeader message="Log-in to your account" />
      <SignUpForm />
      <CustomMessage>
        Already have an acount? <Link to='/'>Sign In</Link>
      </CustomMessage>
    </Grid.Column>
  </Grid>
);

export default SignUp;
