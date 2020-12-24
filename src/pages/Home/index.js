import React, { Component } from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import { TaskGroup } from '../../components';

class Home extends Component {
  render(){
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

export default Home;
