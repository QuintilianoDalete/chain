import React, { Component } from 'react';
import { NavBar } from '../../components';


class Tasks extends Component {
  render(){
    console.log("props", this.props)
    return(
      <>
        <h1>Tasks</h1>
      </>
    );
  }
}

export default Tasks;
