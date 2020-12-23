import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CustomMessage, CustomHeader, SignUpForm } from "../../components";
import * as authAction from "../../store/ducks/auth/actions";

class SignUp extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { signUp, history } = this.props;
    const user = this.state;
    signUp(user);
    history.push("/");
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader
            as="h2"
            color="blue"
            textAlign="center"
            message="Welcome the Chain"
          />
          <SignUpForm
            formData={this.state}
            onInputChange={this.handleInputChange}
            onHandleSubmit={this.handleSubmit}
          />
          <CustomMessage>
            Already have an account? <Link to="/chain">Sign In</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  signUp: authAction.signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
