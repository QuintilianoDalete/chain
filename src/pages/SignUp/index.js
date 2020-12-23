import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CustomMessage, CustomHeader, SignUpForm } from '../../components';

class SignUp extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render () {
    console.log('props', this.props.history);
    return (
      <Grid 
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader
            as="h2"
            color="blue"
            textAlign="center"
            message="Welcome the Chain"
          />
          <SignUpForm
            formData={this.sate}
            onInputchange={this.handleInputChange}
          />
          <CustomMessage>
            Already have an acount? <Link to='/'>Sign In</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
  
export default connect(mapStateToProps)(SignUp);
