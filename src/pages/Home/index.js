import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Icon } from 'semantic-ui-react';
import { TaskGroup } from '../../components';

class Home extends Component {
  render(){
    const { tasks, auth: { currentUser: { name } } } = this.props;
    return(
      <Container fluid textAlign='justified' style={{ width: 1000}}>
        <Header style={{ marginTop: 40 }} textAlign='center' as='h2'>
          <Icon name='tasks' />
          <Header.Content>{`${name}'s user Tasks`}</Header.Content>
        </Header>
        <TaskGroup tasks={tasks} />
      </Container>
    );
  }
}

const mapStateToProps = (tasks, auth) => ({
  tasks,
  auth
});

export default connect(mapStateToProps)(Home);
