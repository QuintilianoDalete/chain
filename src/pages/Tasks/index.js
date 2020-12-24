import React, { Component } from 'react';
import { NavBar } from '../../components';


class Tasks extends Component {
  render(){
    console.log("props", this.props)
    return(
      <>
        <NavBar onLogOut={this.props.onLogOut} />
        <h1>tasks</h1>
      </>
    );
  }
}

export default Tasks;
