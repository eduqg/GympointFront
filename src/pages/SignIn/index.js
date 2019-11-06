import React from 'react';

import { Container, Card } from './styles';

import logo from '../../assets/gympoint.svg';

export default function SignIn() {
  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <img src={logo} alt="gym" />
      </Card>
    </Container>
  );
}
