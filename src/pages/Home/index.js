import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Icon } from 'semantic-ui-react';
import { TaskGroup } from '../../components';

class Home extends Component {
  render(){
    console.log(this.props.tasks);
    return(
      <Container fluid textAlign='justified' style={{ width: 1000}}>
        <Header style={{ marginTop: 40 }} textAlign='center' as='h2'>
          <Icon name='tasks' />
          <Header.Content>{`Current user Tasks`}</Header.Content>
        </Header>
        <TaskGroup tasks={[]} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
