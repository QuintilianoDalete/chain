import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const CustomHeader = ({ message }) => (
  <Header as='h2' color='teal' textAlign='center'>
    <Image src='/images/logo.png' /> {message}
  </Header>
);

export default CustomHeader;
