import React from 'react';

import Button from '../../../styles/components/Button';
import { Container, SignForm } from '../styles';

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Boas Vindas</h1>

      <span>E-MAIL</span>
      <input type="email" name="email" />

      <span>SENHA</span>
      <input type="password" name="password" />

      <Button size="big" className="button-entrar" type="submit">
        Entrar
      </Button>
    </SignForm>
  </Container>
);

export default SignIn;
