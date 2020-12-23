import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LoginForm, CustomMessage, CustomHeader } from '../../components';

class Login extends Component {
  render () {
    console.log("props", this.props)
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader message="Log-in to your account" />
          <LoginForm />
          <CustomMessage>
            New to us? <Link to='/signup'>Sign Up</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
  }
};

export default Login;
