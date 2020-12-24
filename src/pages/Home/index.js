import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as authAction from "../../store/ducks/auth/actions";


class Home extends Component {
  render(){
    console.log("props", this.props)
    return(
      <>
        <h1>Home</h1>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogOut: authAction.logOut
};

export default connect(null, mapDispatchToProps)(Home);
