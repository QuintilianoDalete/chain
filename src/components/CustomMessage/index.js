import React from 'react';
import { Message, Image } from 'semantic-ui-react';

const CustomMessage = ({ children }) => (
  <Message>
    {children}
  </Message>
);

export default CustomMessage;
